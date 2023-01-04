function findTreeNode(root, el) {
  const path = [];
  let on = el;

  while (on.parent) {
    const index = on.parent.children.indexOf(on);
    path.push(index);

    on = on.parent;
  }

  on = root;
  while (path.length) {
    on = on.children[path.pop()];
  }
}
