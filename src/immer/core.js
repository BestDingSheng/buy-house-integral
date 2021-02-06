import * as is from './is'
let INTERNAL = Symbol('INTERNAL');
/**
 * @description: 
 * @param {*} baseState 原状态
 * @param {*} producer 处理器或者说生产者
 */
export function produce(baseState, producer) {
    let proxy = toProxy(baseState);
    producer(proxy);
    const internal = proxy[INTERNAL];
    return internal.mutated ? internal.draftState :internal.baseState;
}

export function toProxy(baseState, callParentCopy) {
    // 这里存的是老的
    let keyToProxy = {}; 
    let internal = {
        baseState,
        draftState: createDraftState(baseState),
        keyToProxy,
        mutated: false,
    }
    return new Proxy(baseState,{
        get(target,key) {
            if (key === INTERNAL) {
                return internal
            }
            let value = target[key];
            // debugger
            // 当你访问某个属性的时候 我们就要对这个属性进行代理
            if (is.isObject(value) || is.isArray(value)) {
                if (key in keyToProxy) {
                    debugger
                    return keyToProxy[key]
                } else {
                    keyToProxy[key] = toProxy(value, ()=>{
                        // 任何一个儿子变了 自己也会变
                        internal.mutated = true;
                        const proxyChild = keyToProxy[key];
                        debugger
                        let { draftState: childDraftState } = proxyChild[INTERNAL];
                        internal.draftState[key] = childDraftState;
                        // 这里面的 internal 是最外面的 
                        // 这里把 key 指向到 keyToProxyh 的对象上
                        callParentCopy && callParentCopy();
                        // debugger
                    })
                }
                return keyToProxy[key];
                // 如果是引用类型， 则要先得到对应的Proxy 对象 然后返回代理对象
            } else if (is.isFunction(value)) {
                internal.mutated = true;
                callParentCopy && callParentCopy();
                // this 指向到 draftState 返回一个新的函数
                return value.bind(internal.draftState);
            }
            return internal.mutated ? internal.draftState[key] : internal.baseState[key];
        },
        set(target, key, value){
            debugger
            internal.mutated = true;
            const {draftState} = internal;
            draftState[key] = value;
            callParentCopy && callParentCopy();
            return true;
        }
    })
}

function createDraftState(baseState) {
    if (is.isObject(baseState)) {
        return Object.assign({}, baseState)
    } else if (is.isArray(baseState)) {
        return [...baseState]
    } else {
        return baseState
    }
}