### Definition

- A tree where every node has two or fewer children.
- Children are typically called left/right.

### Terms

- **Perfect**: every level of tree is _full_. No "gaps".

![perfect tree](https://www.interviewcake.com/images/svgs/binary_tree__depth_5.svg?bust=188)

---

### Perfect Tree

##### Properties

> The number of total nodes on each level "doubles" as we move down the tree

![double node](https://www.interviewcake.com/images/svgs/binary_tree__depth_5_with_number_of_nodes_labelled.svg?bust=188)

> The number of nodes on the last level is equal to the sum of the number of nodes on all other levels.

- Half of all nodes are on last level

#### Algorithm

###### Getting number of Nodes

_n_ = number of nodes
_h_ = number of levels

_Total # of Nodes:_
![screen shot 2018-11-06 at 11 15 07 am](https://user-images.githubusercontent.com/35910428/48084562-4d7a7000-e1b5-11e8-8f2c-bf2ee182b475.png)

_Equation:_
![image](https://user-images.githubusercontent.com/35910428/48085033-73ecdb00-e1b6-11e8-9c99-6d2920ad9bf1.png)

###### Getting number of Levels

_Equation:_

![image](https://user-images.githubusercontent.com/35910428/48085475-9d5a3680-e1b7-11e8-808f-756ef16fa1e5.png)

##### Reference

- Class Implementation: `line 1-7 js`
