(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{415:function(t,v,a){"use strict";a.r(v);var e=a(42),_=Object(e.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("在阿里大促秒杀的小库存商品场景中为了避免商品出现超卖（即成功下单的订单中商品的库存数量大于商品现有的库存量，则称为商品超卖）的问题，运用了乐观锁来解决高并发。")]),t._v(" "),a("p",[t._v("乐观所和悲观锁策略概述\n悲观锁：在读取数据时锁住那几行，其他对这几行的更新需要等到悲观锁结束时才能继续。\n乐观所：读取数据时不锁，更新时检查是否数据已经被更新过，如果是则取消当前更新，一般在悲观锁的等待时间过长而不能接受时我们才会选择乐观锁。\n")]),t._v(" "),a("h1",{attrs:{id:"数据库事务基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库事务基础"}},[t._v("#")]),t._v(" 数据库事务基础")]),t._v(" "),a("h2",{attrs:{id:"脏读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脏读"}},[t._v("#")]),t._v(" 脏读")]),t._v(" "),a("p",[t._v("脏读(Dirty Reads)就是指当一个事务正在访问数据，并且对数据进行了修改，而这种修改还没有提交到数据库中，这时，另外一个事务也访问这个数据，然后使用了这个数据。")]),t._v(" "),a("p",[t._v("因为这个数据是还没有提交的数据，那么另外一个事务读到的这个数据是脏数据(Dirty Data)，依据脏数据所做的操作可能是不正确的。")]),t._v(" "),a("h2",{attrs:{id:"不可重复读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不可重复读"}},[t._v("#")]),t._v(" 不可重复读")]),t._v(" "),a("p",[t._v("不可重复读取(Non-Repeatable Reads):  A 事务两次读取同一数据，B事务也读取这同一数据，但是 A 事务在第二次读取前B事务已经更新了这一数据。所以对于A事务来说，它第一次和第二次读取到的这一数据可能就不一致了。")]),t._v(" "),a("h2",{attrs:{id:"幻读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#幻读"}},[t._v("#")]),t._v(" 幻读")]),t._v(" "),a("p",[t._v("幻读(Phantom Reads): 与不可重复读有点类似，都是两次读取，不同的是 A 事务第一次操作的比如说是全表的数据，此时 B 事务并不是只修改某一具体数据而是插入了一条新数据，而后 A 事务第二次读取这全表的时候就发现比上一次多了一条数据，发生幻觉了。")]),t._v(" "),a("h2",{attrs:{id:"排它锁-x锁-和共享锁-s锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排它锁-x锁-和共享锁-s锁"}},[t._v("#")]),t._v(" 排它锁(X锁)和共享锁(S锁)")]),t._v(" "),a("p",[t._v("基本的封锁类型有两种:排它锁(X锁)和共享锁(S锁)。")]),t._v(" "),a("p",[t._v("所谓X锁,是事务T对数据A加上X锁时,只允许事务T读取和修改数据A。")]),t._v(" "),a("p",[t._v("所谓S锁,是事务T对数据A加上S锁时,其他事务只能再对数据A加S锁,而不能加X锁,直到T释放A上的S锁")]),t._v(" "),a("p",[t._v("若事务T对数据对象A加了S锁,则T就可以对A进行读取,但不能进行更新(S锁因此又称为读锁)。")]),t._v(" "),a("p",[t._v("在T释放A上的S锁以前,其他事务可以再对A加S锁,但不能加X锁,从而可以读取A,但不能更新A。")]),t._v(" "),a("h2",{attrs:{id:"数据库隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库隔离级别"}},[t._v("#")]),t._v(" 数据库隔离级别")]),t._v(" "),a("p",[t._v("数据库事务的隔离级别有4个，由低到高依次为Read uncommitted（读未提交）、Read committed（不可重复读）、Repeatable read（可重复读）、Serializable（串行化），这四个级别可以逐个解决脏读、不可重复读、幻读这几类问题。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("脏读")]),t._v(" "),a("th",[t._v("不可重复读")]),t._v(" "),a("th",[t._v("幻读")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Read uncommitted")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td",[t._v("√")])]),t._v(" "),a("tr",[a("td",[t._v("Read committed   Sql Server , Oracle")]),t._v(" "),a("td",[t._v("×")]),t._v(" "),a("td",[t._v("√")]),t._v(" "),a("td",[t._v("√")])]),t._v(" "),a("tr",[a("td",[t._v("Repeatable read   MySQL")]),t._v(" "),a("td",[t._v("×")]),t._v(" "),a("td",[t._v("×")]),t._v(" "),a("td",[t._v("√")])]),t._v(" "),a("tr",[a("td",[t._v("Serializable")]),t._v(" "),a("td",[t._v("×")]),t._v(" "),a("td",[t._v("×")]),t._v(" "),a("td",[t._v("×")])])])]),t._v(" "),a("p",[t._v("隔离级别与锁的关系：\n事务隔离级别是并发控制的整体解决方案，其实际上是综合利用各种类型的锁和行版本控制来解决并发问题。锁是数据库并发控制的内部机制，是基础。\n"),a("code",[t._v("对用户来说，只有当事务隔离级别无法解决一些并发问题和需求时，才有必要在语句中手动设置锁，不恰当的设置锁可能导致严重的阻塞和死锁。")]),t._v(" "),a("code",[t._v("建议在完全了解锁机制的情况下，才可以再语句中手动设置锁，否则应该使用事务隔离级别。")])]),t._v(" "),a("h1",{attrs:{id:"高并发商品超卖的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高并发商品超卖的原因"}},[t._v("#")]),t._v(" 高并发商品超卖的原因")]),t._v(" "),a("p",[t._v("在使用SQL时，大都会遇到这样的问题，你Update一条记录时，需要通过Select来检索出其值或条件(库存>0)，然后在通过这个值来执行修改操作，或满足条件时执行update操作。\n但当以上操作放到多线程中并发处理时会出现问题：某线程select了一条记录但还没来得及update时，另一个线程仍然可能会进来select到同一条记录。")]),t._v(" "),a("blockquote",[a("p",[t._v("select会产生read锁(共享锁 S锁),update会产生write锁(排它锁 X锁)。\nupdate时需要等待read锁的释放,但是select时不需要,select之间的read锁是不冲突的，所以多个select是可以忽略read锁查出数据的")])]),t._v(" "),a("p",[t._v("上述这种情况就属于事务的隔离级别无法解决的并发问题,并发不大的情况可以在sql中手动设置锁(悲观锁),高并发情况下可以使用乐观锁。")]),t._v(" "),a("h1",{attrs:{id:"悲观锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#悲观锁"}},[t._v("#")]),t._v(" 悲观锁")]),t._v(" "),a("p",[t._v("悲观锁，正如其名，它指的是对数据被外界（包括本系统当前的其他事务，以及来自 外部系统的事务处理）修改持保守态度，因此，在整个数据处理过程中，将数据处于锁定状态。")]),t._v(" "),a("p",[t._v("悲观锁的实现，往往依靠数据库提供的锁机制（也只有数据库层提供的锁机制才能 真正保证数据访问的排他性，否则，即使在本系统中实现了加锁机制，也无法保证外部系 统不会修改数据）。")]),t._v(" "),a("p",[t._v("MySql在select时锁定数据主要使用SELECT ... FOR UPDATE,主要有两点：")]),t._v(" "),a("ol",[a("li",[t._v("FOR UPDATE会等待行级锁(行级锁，一般是指排它锁)释放之后，返回查询结果")]),t._v(" "),a("li",[t._v("FOR UPDATE会锁定查询的行,直到该语句所在的事务被commit或rollback")])]),t._v(" "),a("p",[t._v("悲观锁依靠数据库的锁机制实现，以保证操作最大程度的独占性。但随之而来的就是数据库性能的大量开销，特别是对长事务而言，这样的开销往往无法承受。")]),t._v(" "),a("h1",{attrs:{id:"乐观锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#乐观锁"}},[t._v("#")]),t._v(" 乐观锁")]),t._v(" "),a("p",[t._v("乐观锁总是认为不会产生并发问题，每次去取数据的时候认为不会有其他线程对数据进行修改，因此不会上锁，但是在更新时会判断其他线程在这之前有没有对数据进行修改，一般会使用version机制实现。")]),t._v(" "),a("p",[a("code",[t._v("乐观锁的机制是在我们的程序中实现的,而不是在数据库层面。")])]),t._v(" "),a("p",[t._v("version方式：\n一般是在数据表中加上一个数据版本号version字段，表示数据被修改的次数，当数据被修改时，version值会加一。当线程A要更新数据值时，在读取数据的同时也会读取version值，在提交更新时，若刚才读取到的version值为当前数据库中的version值相等时才更新，否则重试更新操作，直到更新成功。")]),t._v(" "),a("p",[t._v("乐观锁机制避免了事务中的数据库加锁开销，大大提升了大并发量下的系统整体性能表现。")]),t._v(" "),a("h1",{attrs:{id:"淘宝小库存商品秒杀典型架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#淘宝小库存商品秒杀典型架构"}},[t._v("#")]),t._v(" 淘宝小库存商品秒杀典型架构")]),t._v(" "),a("p",[t._v("小库存秒杀：库存为10个，秒杀价格为1元的手机就是是典型的小库存商品秒杀活动")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/ref/%E4%B9%90%E8%A7%82%E9%94%811.png",alt:"Alt text"}})]),t._v(" "),a("ol",[a("li",[t._v("商品购买页面的内容包括库存数量都是从缓存中获取的，避免用户频繁刷新页面从后台取数导致应用卡死")]),t._v(" "),a("li",[t._v("用户点击购买时从缓存获取库存数量(和购买页面上不一样了),大于0时跳转到确认购买界面")]),t._v(" "),a("li",[t._v("确认购买后从数据库获取真实的库存(3.1),当此时获取的库存大于0时，进行库存的扣减操作（3.2）\n在更新数据库库存(3.3)后同时更新缓存中的库存信息(3.4)")])]),t._v(" "),a("p",[t._v("商品库存的乐观锁实现：\n避免商品出现超卖的问题，核心技术是不允许同一商品的库存记录在同一时间被不同的两个数据库事务修改。\n如果采用数据库的悲观锁（比如select语句带for update）模式，则会给订单处理带来很大的性能阻塞。\n比如有10000个人同时下订单，后一个人必须等待前面一个人的事务结束才能开始事务的处理。所以会采用乐观锁的方式实现商品库存的操作。")]),t._v(" "),a("p",[t._v("实现的方式也比较简单，也就是在最后执行库存扣减操作时(3.2)，将事务开始前获取的库存数量带入到SQL语句中与目前数据库记录中的库存数量进行判断，如果数量相等，则该条更新库存的语句成功执行；如果不相等，则表示该商品的库存信息在当前事务执行过程中已经被其他事务修改，则会放弃该条update的执行，可以采用重试的机制重新执行该事务，避免商品超卖的发生，具体的SQL语句示意如下：")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Update")]),t._v(" auction_auctions "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" quantity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#inQuantity#，where auction_id=#itemId# and quantity=#dbQuantity#")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("其中#dbQuantity#为事务中在update语句执行前，通过select语句获取到的商品库存数量。\n这里的#dbQuantity#也就代表了乐观锁中的version字段,不需要再添加额外的version字段了。")]),t._v(" "),a("p",[t._v("在小库存商品的秒杀场景中，缓存平台提供了对商品相关信息的缓存服务，使得用户只有在最终的下单环节才需要对数据库进行访问操作，大大降低了数据库的访问频率，而且因为商品的库存少，秒杀活动转瞬间就结束了，所以构基本就能满足该类大促秒杀场景业务的要求。")])])}),[],!1,null,null,null);v.default=_.exports}}]);