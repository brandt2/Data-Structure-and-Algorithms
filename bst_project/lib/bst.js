class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
  constructor(){
		this.root = null;
	}

	insert(val, root=this.root) {
		if (!this.root) {
			this.root = new TreeNode(val);
			return;
		}

		if (val < root.val) {
			if (!root.left) {
				root.left = new TreeNode(val);
			} else {
				this.insert(val, root.left);
			}
		} else {
			if (!root.right) {
				root.right = new TreeNode(val);
			} else {
				this.insert(val, root.right);
			}
		}
	}

	searchRecur(val, root=this.root) {
		if (!root) return false;

		if (val < root.val) {
			return this.searchRecur(val, root.left);
		} else if (val > root.val) {
			return this.searchRecur(val, root.right);
		} else {
			return true;
		}
	}

	searchIter(val) {
		if (!this.root) return false;
		let currentRoot = this.root;

		while (currentRoot !== null) {
			if (val < currentRoot.val) {
				currentRoot = currentRoot.left;
			} else if (val > currentRoot.val) {
				currentRoot = currentRoot.right;
			} else if (val === currentRoot.val) {
				return true;
			}
		}
		return false;
	}
}

module.exports = {
    TreeNode,
    BST
};