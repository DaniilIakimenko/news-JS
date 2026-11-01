function requireElement<T extends Element>(root: ParentNode, selector: string): T {
    const el = root.querySelector(selector);
    if (!el) {
        throw new Error(`Element not found: ${selector}`);
    }
    return el as T;
}

export { requireElement };
