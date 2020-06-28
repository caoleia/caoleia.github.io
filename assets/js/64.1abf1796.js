(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{411:function(t,a,s){"use strict";s.r(a);var r=s(42),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("堆可以高效的解决以下问题：")]),t._v(" "),s("ol",[s("li",[t._v("优先级队列，队列中优先级高的先被处理")]),t._v(" "),s("li",[t._v("求前K个最大的元素，元素个数不确定，数据列可能很大，甚至源源不断。变体有：求前K个最小的元素，第K个最大的元素\n不直接排序的原因是，因为数据列很大，堆不需要全部排序即可找出当前最大或最小的数。")]),t._v(" "),s("li",[t._v("求中值元素，中值不是平均值，而是排序后中间那个元素的值。同样适用于数据列很大的场景。\n")])]),t._v(" "),s("h1",{attrs:{id:"基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),s("p",[t._v("堆首先是一个二叉树，而且是"),s("code",[t._v("完全二叉树")]),t._v("。")]),t._v(" "),s("p",[t._v("先看一个相似的概念：满二叉树\n满二叉树指除了最后一层外，每个节点都有两个孩子")]),t._v(" "),s("p",[t._v("完全二叉树：\n不要求最后一层是满的，但如果不满,则要求所有节点必须几种在最左边。从左到右是连续的中间不能有空的。\n"),s("img",{attrs:{src:"/images/ref/%E5%A0%8601.png",alt:"Alt text"}})]),t._v(" "),s("p",[t._v("在完全二叉树中，可以给每个节点一个编号,编号从1开始连续递增，从上到下，从左到右。\n"),s("img",{attrs:{src:"/images/ref/%E5%A0%8602.png",alt:"Alt text"}}),t._v(" "),s("code",[t._v("完全二叉树有一个重要的特点：给定任意一个节点，可以根据其编号直接快速计算出其父节点和孩子节点编号")]),t._v("。\n如果编号为i，则父节点编号为i/2,左孩子编号为2"),s("em",[t._v("i,右孩子编号为2")]),t._v("i+1。")]),t._v(" "),s("p",[t._v("这样就可以使得逻辑概念上的二叉树可以方便地存储到数组中，树中的父子关系通过索引关系隐含维持，不需要单独保持。\n"),s("img",{attrs:{src:"/images/ref/%E5%A0%8603.png",alt:"Alt text"}})]),t._v(" "),s("p",[t._v("在堆中，可以有重复元素，元素间不是完全有序的，但对于父子节点之间，有一定的顺序要求。\n根据顺序分为两种堆：最大堆，最小堆。")]),t._v(" "),s("p",[t._v("最大堆是指每个节点都不大于其父节点。这样对于每个父节点，一定不小于其所有孩子节点，二根节点就是所有节点中最大的。")]),t._v(" "),s("p",[t._v("总结：逻辑概念上，堆是完全二叉树，父子节点间有特定顺序，分为最大堆与最下堆，使用数组进行物理存储。")]),t._v(" "),s("h1",{attrs:{id:"堆的算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#堆的算法"}},[t._v("#")]),t._v(" 堆的算法")]),t._v(" "),s("p",[t._v("以最小堆来说明")]),t._v(" "),s("h2",{attrs:{id:"添加元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加元素"}},[t._v("#")]),t._v(" 添加元素")]),t._v(" "),s("p",[t._v("如果堆为空，直接添加一个根。假设已经有一个不为空的堆，要添加元素：")]),t._v(" "),s("ol",[s("li",[t._v("添加元素到最后位置")]),t._v(" "),s("li",[t._v("与父节点比较，如果大于等于父节点，则结束。否则与父节点进行交换，然后再比较...直到父节点为空或者大于等于父节点")])]),t._v(" "),s("p",[t._v("这种自底向上比较、交换，使得树重新满足堆的性质的过程，称为向上调整(siftup)")]),t._v(" "),s("h2",{attrs:{id:"从头部删除元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从头部删除元素"}},[t._v("#")]),t._v(" 从头部删除元素")]),t._v(" "),s("ol",[s("li",[t._v("用最后一个元素替换头部元素，并删掉最后一个元素")]),t._v(" "),s("li",[t._v("将新的头部与两个孩子节点中较小的比较，如果不大于则结束。否则，与较小的孩子节点进行交换，交换后继续比较...")])]),t._v(" "),s("p",[t._v("这个过程称为向下调整(siftdown)")]),t._v(" "),s("h2",{attrs:{id:"从中间删除元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从中间删除元素"}},[t._v("#")]),t._v(" 从中间删除元素")]),t._v(" "),s("ol",[s("li",[t._v("先用最后一个元素替换待删元素")]),t._v(" "),s("li",[t._v("如果该元素大于某孩子节点，向下调整。如果该元素小于父节点，向上调整")])]),t._v(" "),s("h2",{attrs:{id:"构建初始堆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建初始堆"}},[t._v("#")]),t._v(" 构建初始堆")]),t._v(" "),s("p",[t._v("给定一个无序数组，如何使之称为一个最小堆呢？这个过程称为heapify，基本思路：\n从最后一个非叶子节点开始(size/2)，一直到根节点，对每个节点执行向下调整。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("heapity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" size"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("siftdown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"查找和遍历"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找和遍历"}},[t._v("#")]),t._v(" 查找和遍历")]),t._v(" "),s("p",[t._v("就是对数组的遍历")]),t._v(" "),s("h1",{attrs:{id:"priorityqueue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#priorityqueue"}},[t._v("#")]),t._v(" PriorityQueue")]),t._v(" "),s("p",[t._v("PriorityQueue优先级队列，内部是用堆实现的，内部元素不完全有序，不过逐个出队会得到有序的输出。\n虽然名字叫优先级队列，也可以当做一种比较通用的实现了堆的性质的数据结构，可以用来解决适合用堆解决的问题。")]),t._v(" "),s("h2",{attrs:{id:"求前k个最大的元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#求前k个最大的元素"}},[t._v("#")]),t._v(" 求前K个最大的元素")]),t._v(" "),s("p",[t._v("简单思路：排序\n如果K很小，直接取最大值就好了，对所有元素排序毫无必要")]),t._v(" "),s("p",[t._v("简单思路2：循环K次，每次从剩下的元素中选择最大值\n这两个思路都假定所有元素都是已知的，而不是动态添加的。如果元素个数不确定而且源源不断到来呢？")]),t._v(" "),s("p",[t._v("思路： 维护一个长度为K的数组，最前面的K个元素就是目前最大的K个元素，后来的新元素都现找出数组中的最小值将新元素与最小值比较，如果小于最小值不变。如果大于最小值，则替换元素。\n缺点是每次都需要找出最小值，需要进行K次比较")]),t._v(" "),s("p",[t._v("用堆来解决：用最小堆维护这K个元素，根永远是最小的，新来的元素与根比较就可以了。如果小于根不需变化，否则替换根元素，向下调整。")])])}),[],!1,null,null,null);a.default=e.exports}}]);