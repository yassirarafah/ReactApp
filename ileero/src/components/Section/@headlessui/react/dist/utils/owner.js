function t(n){return typeof window=="undefined"?null:n instanceof Node?n.ownerDocument:n!=null&&n.hasOwnProperty("current")&&n.current instanceof Node?n.current.ownerDocument:document}export{t as getOwnerDocument};
