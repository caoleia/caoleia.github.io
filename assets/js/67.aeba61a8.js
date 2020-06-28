(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{419:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css像素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css像素"}},[t._v("#")]),t._v(" css像素")]),t._v(" "),a("p",[t._v("按照以前的理解css中1px就是屏幕上的一个点，是屏幕能显示的最小单位，实际情况并没有那么简单。")]),t._v(" "),a("p",[t._v("首先有三个概念：\nCSS像素（CSS Pixel）：适用于web编程，指的是我们在样式代码中使用到的逻辑像素，是一个抽象概念，实际并不存在\n设备独立像素（Device Independent Pixel）：与设备无关的逻辑像素，代表可以通过程序控制使用的虚拟像素，是一个总体概念，包括了CSS像素\n设备像素（Device Pixel）：物理像素，设备能控制显示的最小单位，我们常说的1920×1080像素分辨率就是用的设备像素单位")]),t._v(" "),a("h2",{attrs:{id:"设备像素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备像素"}},[t._v("#")]),t._v(" 设备像素")]),t._v(" "),a("p",[t._v("设备像素也被称作为物理像素，它表示显示设备的真实像素，此像素是设备的固有属性，也就是说，从出厂的那一刻，设备像素已经固定，不会再发生改变。\n设备像素也就是我们平常说的屏幕分辨率（物理分辨率），它是屏幕能显示的最小单位，例如1920*1080，表示设备横向有1920像素点，纵向有1080个像素点。")]),t._v(" "),a("p",[a("code",[t._v("设备像素 = 物理像素 = 屏幕分辨率 = 屏幕物理分辨率")]),t._v("\n上面都是的概念都是一个意思，一开始还是很容易搞不清楚的。")]),t._v(" "),a("h2",{attrs:{id:"设备独立像素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备独立像素"}},[t._v("#")]),t._v(" 设备独立像素")]),t._v(" "),a("p",[a("code",[t._v("设备独立像素 = 逻辑像素 = 屏幕逻辑分辨率")]),t._v(" 是一个意思。")]),t._v(" "),a("p",[t._v("PC端 —— 1个设备独立像素 = 1个设备像素 （在100%，未缩放的情况下，如果缩放到200%可以说1个设备独立像素 = 2个设备像素）")]),t._v(" "),a("p",[t._v("移动端 —— 根据设备不同有很大的差异，根据 ppi 不同我们可以得到不同的换算关系，标准屏幕（160ppi）下 1个设备独立像素 = 1个设备像素")]),t._v(" "),a("p",[t._v("从这里可以看出在pc端，css的1px就是屏幕上1像素（物理像素 = 逻辑像素）")]),t._v(" "),a("p",[t._v("在移动端就不一定了，iphone6 750 x 1344分辨率，对某一元素设置css：width = 750px，元素的宽度是屏幕的2倍\n原因就是iphone6的逻辑分辨率是 375 x 667。")]),t._v(" "),a("h1",{attrs:{id:"移动端设计中的一些参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端设计中的一些参数"}},[t._v("#")]),t._v(" 移动端设计中的一些参数")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/ref/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%917.png",alt:"Alt text"}})]),t._v(" "),a("p",[t._v("以iphone6来说\n屏幕尺寸： 4.7英寸\n逻辑分辨率：375×667pt\n物理分辨率: 750×1334px\n像素密度: 326ppi\n缩放因子：@2x")]),t._v(" "),a("h2",{attrs:{id:"pt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pt"}},[t._v("#")]),t._v(" pt")]),t._v(" "),a("p",[t._v("ios中pt是逻辑像素的单位，pt表示屏幕上的一个点，在非retina屏幕上 1pt=1px, 在retina屏幕上相同的长度可以显示以前两倍的像素 1pt = 2px,在iphone6 plus上 1pt = 3px。")]),t._v(" "),a("p",[t._v("pt是一个绝对长度，和米、厘米一样只是要小的多，苹果之所用固定长度pt作为开发单位的好处是：这样可以统一图形在同一种类不同型号设备上图形的大小。而如果用像素作为单位的话，就乱了套了，因为在不同像素密度的屏幕里面，像素本身大小是不一样的。")]),t._v(" "),a("h2",{attrs:{id:"屏幕尺寸"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#屏幕尺寸"}},[t._v("#")]),t._v(" 屏幕尺寸")]),t._v(" "),a("p",[t._v("4.7英寸指的是屏幕对角线的距离为4.7英寸。\n同时屏幕每行有750个像素，每列有1334个像素。\n"),a("img",{attrs:{src:"/images/ref/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%915.png",alt:"Alt text"}})]),t._v(" "),a("h2",{attrs:{id:"ppi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ppi"}},[t._v("#")]),t._v(" ppi")]),t._v(" "),a("p",[t._v("ppi说的是像素密度,表示沿着屏幕对角线每英寸所拥有的像素数目，ppi的数值越高，代表显示屏能够以越高的密度显示图像。\n"),a("img",{attrs:{src:"/images/ref/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%916.png",alt:"Alt text"}})]),t._v(" "),a("p",[t._v("根据以上可以得出结论：ppi越大显示效果越好，单纯的说分辨率大小是没有意义的，要和屏幕大小一起考虑。")]),t._v(" "),a("blockquote",[a("p",[t._v("所以光看屏幕的分辨率对于设计师来说是不具备多少实际意义的，通过分辨率计算得出的像素密度（PPI）才是设计师要关心的问题，我们通过屏幕分辨率和屏幕尺寸就能计算出屏幕的像素密度的。")])]),t._v(" "),a("h2",{attrs:{id:"缩放因子scale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缩放因子scale"}},[t._v("#")]),t._v(" 缩放因子scale")]),t._v(" "),a("p",[t._v("dpr（device pixel ratio）：设备像素比 = 设备像素/设备独立像素，代表设备独立像素到设备像素的转换关系，在JS中可以通过 window.devicePixelRatio 获取")]),t._v(" "),a("p",[t._v("iphone6 devicePixelRatio = 750 / 375 = 2")]),t._v(" "),a("p",[t._v("这个2有什么含义呢，css中设置的2像素，标准屏上占据2个像素，在retina屏幕上实际上占据4个像素\n"),a("img",{attrs:{src:"/images/ref/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%918.png",alt:"Alt text"}})]),t._v(" "),a("p",[t._v("devicePixelRatio的值就是缩放因子，1就是@1x，2就是@2x，3就是@3x")]),t._v(" "),a("h3",{attrs:{id:"对设计造成的影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对设计造成的影响"}},[t._v("#")]),t._v(" 对设计造成的影响")]),t._v(" "),a("p",[t._v("iPhone3GS时代,我们为一个应用提供图标,只需要icon.png。针对现在的iPhone4~6 Retina显示屏,需要制作额外的@2x高分辨率版本。")]),t._v(" "),a("p",[t._v("iPhone3GS中,scale=1,如果要一个50x50大小的图，设计师就给你切一个50x50的icon.png\n在iPhone4~6中,scale=2,则需要一个100×100的图，并且命名为icon@2x.png。\niPhone6+,scale=3，则需要提供一个150x150的图，并且命名为icon@3x.png。")]),t._v(" "),a("p",[t._v("这样的目的是为了让图片在屏幕上同比例显示。")]),t._v(" "),a("h1",{attrs:{id:"viewport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewport"}},[t._v("#")]),t._v(" viewport")]),t._v(" "),a("blockquote",[a("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"}}),t._v("\n该meta标签的作用是让当前viewport的宽度等于设备的宽度，同时不允许用户手动缩放,也许允不允许用户缩放（进行响应式设计的前提）\n")]),t._v(" "),a("p",[a("code",[t._v("移动开发需要在index.html中加上上述标签，具体的效果就是为了让我们可以开发出适应不同设备的h5页面。")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("移动设备上进行网页的重构或开发，首先得搞明白的就是移动设备上的viewport了。\n只有明白了viewport的概念以及弄清楚了跟viewport有关的meta标签的使用，才能更好地让我们的网页适配或响应各种不同分辨率的移动设备。")]),t._v(" "),a("p",[t._v('定义:\nviewport 是用户网页的可视区域。\nviewport 翻译为中文可以叫做"视区"。\n手机浏览器是把页面放在一个虚拟的"窗口"（viewport）中，通常这个虚拟的"窗口"（viewport）比屏幕宽(移动设备上的浏览器都会把自己默认的viewport设为980px或1024px)，这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），用户可以通过平移和缩放来看网页的不同部分。')]),t._v(" "),a("p",[t._v("没有添加 viewport：\n"),a("img",{attrs:{src:"/images/ref/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%911.png",alt:"Alt text"}})]),t._v(" "),a("p",[t._v("添加 viewport：\n"),a("img",{attrs:{src:"/images/ref/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%912.png",alt:"Alt text"}})]),t._v(" "),a("h2",{attrs:{id:"content属性值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content属性值"}},[t._v("#")]),t._v(" content属性值")]),t._v(" "),a("p",[t._v("width: 可视区域的宽度，值可为数字或关键词device-width\n"),a("code",[t._v("device-width为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）")]),t._v("\nheight: 同width\nintial-scale:  页面首次被显示时可视区域的缩放级别，取值1.0则页面按实际尺寸显示，无任何缩放\nmaximum-scale：可视区域允许用户放大到的最大比例（1.0将禁止用户放大到实际尺寸之上）\nminimum-scale：可视区域允许用户缩放到的最小比例\nuser-scalable: 是否可对页面进行缩放，no 禁止缩放")]),t._v(" "),a("h2",{attrs:{id:"_1px"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1px"}},[t._v("#")]),t._v(" 1px")]),t._v(" "),a("blockquote",[a("p",[t._v("在移动端设置border为1px,边框会显示的很粗。由于在css中1px就是最小的单位了(1像素),小于1px的设置都不会生效\n在移动端需要运用特别的css技巧来实现1px border")])]),t._v(" "),a("p",[t._v("在桌面浏览器中css的1个像素往往都是对应着电脑屏幕的1个物理像素，但是在移动端中1px并不是移动设备屏幕的1个物理像素。\ncss中的像素只是一个抽象的单位，在不同的设备或不同的环境中,css中的1px所代表的设备物理像素是不同的。")]),t._v(" "),a("blockquote",[a("p",[t._v("在早先的移动设备中，屏幕像素密度都比较低，如iphone3，它的分辨率为320x480，在iphone3上，一个css像素确实是等于一个屏幕物理像素的。\n后来随着技术的发展，移动设备的屏幕像素密度越来越高，从iphone4开始，苹果公司便推出了所谓的Retina屏，分辨率提高了一倍，变成640x960，但屏幕尺寸却没变化，这就意味着同样大小的屏幕上，像素却多了一倍，这时，一个css像素是等于两个物理像素的。\n安卓设备根据屏幕像素密度可分为ldpi、mdpi、hdpi、xhdpi等不同的等级，分辨率也是五花八门，安卓设备上的一个css像素相当于多少个屏幕物理像素，也因设备的不同而不同，没有一个定论。")])]),t._v(" "),a("h2",{attrs:{id:"devicepixelratio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devicepixelratio"}},[t._v("#")]),t._v(" devicePixelRatio")]),t._v(" "),a("p",[t._v("在移动端浏览器中以及某些桌面浏览器中，window对象有一个devicePixelRatio属性，它的官方的定义为：设备物理像素和设备独立像素的比例，也就是 devicePixelRatio = 物理像素 / 独立像素。"),a("code",[t._v("css中的px就可以看做是设备的独立像素")]),t._v("，所以通过devicePixelRatio，我们可以知道该设备上一个css像素代表多少个物理像素。")]),t._v(" "),a("p",[t._v("例如，在Retina屏的iphone上，devicePixelRatio的值为2，也就是说1个css像素相当于2个物理像素。")]),t._v(" "),a("h2",{attrs:{id:"layout-viewport，visual-viewport，ideal-viewport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layout-viewport，visual-viewport，ideal-viewport"}},[t._v("#")]),t._v(" layout viewport，visual viewport，ideal viewport")]),t._v(" "),a("p",[t._v("移动浏览器默认的viewport叫做 layout viewport，它比屏幕要宽(980px或1024px)，宽度可以通过document.documentElement.clientWidth 来获取。")]),t._v(" "),a("p",[t._v("浏览器可视区域的大小叫做 visual viewport，它的宽度可以通过window.innerWidth来获取。")]),t._v(" "),a("p",[t._v("现在已经有两个viewport了：layout viewport 和 visual viewport。但浏览器觉得还不够，因为现在越来越多的网站都会为移动设备进行单独的设计，所以必须还要有一个能完美适配移动设备的viewport。所谓的完美适配指的是，首先不需要用户缩放和横向滚动条就能正常的查看网站的所有内容；第二，显示的文字的大小是合适，比如一段14px大小的文字，不会因为在一个高密度像素的屏幕里显示得太小而无法看清，理想的情况是这段14px的文字无论是在何种密度屏幕，何种分辨率下，显示出来的大小都是差不多的。当然，不只是文字，其他元素像图片什么的也是这个道理。ppk把这个viewport叫做 ideal viewport，也就是第三个viewport——移动设备的理想viewport。")]),t._v(" "),a("p",[t._v("ideal viewport并没有一个固定的尺寸，不同的设备拥有有不同的ideal viewport。所有的iphone的ideal viewport宽度都是320px，无论它的屏幕宽度是320还是640，也就是说，在iphone中，"),a("code",[t._v("css中的320px就代表iphone屏幕的宽度")]),t._v("。但是安卓设备就比较复杂了，有320px的，有360px的，有384px的等等。")]),t._v(" "),a("blockquote",[a("p",[t._v("viewport分为layout viewport  、 visual viewport   和 ideal viewport  三类，其中的ideal viewport是最适合移动设备的viewport，"),a("code",[t._v("ideal viewport的宽度等于移动设备的屏幕宽度")]),t._v("，只要在css中把某一元素的宽度设为ideal viewport的宽度(单位用px)，那么这个元素的宽度就是设备屏幕的宽度了，也就是宽度为100%的效果。\nideal viewport 的意义在于，无论在何种分辨率的屏幕下，那些针对ideal viewport 而设计的网站，不需要用户手动缩放，也不需要出现横向滚动条，都可以完美的呈现给用户。")])]),t._v(" "),a("h2",{attrs:{id:"initial-scale缩放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initial-scale缩放"}},[t._v("#")]),t._v(" initial-scale缩放")]),t._v(" "),a("p",[t._v("initial-scale：页面首次被显示时可视区域(visual  viewport)的缩放级别，取值1.0则页面按实际尺寸显示，无任何缩放。")]),t._v(" "),a("p",[t._v("首先缩放是相对于ideal viewport来缩放的，缩放值越大，当前viewport的宽度就会越小。\n在iphone中，ideal viewport的宽度是320px，如果我们设置 initial-scale=2 ，此时viewport的宽度会变为只有160px了。\n由此带来的效果是，在实际宽度不变的情况下原来1px变成2px了，但是1px变为2px并不是把原来的320px变为640px了，而是在实际宽度不变的情况下，1px变得跟原来的2px的长度一样了，所以放大2倍后原来需要320px才能填满的宽度现在只需要160px就可以了。")]),t._v(" "),a("p",[t._v("我们可以得出一个公式："),a("code",[t._v("visual viewport宽度 = ideal viewport宽度 / 当前缩放值")])]),t._v(" "),a("p",[t._v("好了，现在再来说下initial-scale的默认值问题，就是不写这个属性的时候，它的默认值会是多少呢？很显然不会是1，因为当 initial-scale = 1 时，当前的layout viewport宽度会被设为 ideal viewport的宽度，但前面说了，各浏览器默认的 layout viewport宽度一般都是980啊，1024啊，800啊等等这些个值，没有一开始就是 ideal viewport的宽度的，所以 initial-scale的默认值肯定不是1。安卓设备上的initial-scale默认值好像没有方法能够得到，或者就是干脆它就没有默认值，一定要你显示的写出来这个东西才会起作用，我们不管它了，这里我们重点说一下iphone和ipad上的initial-scale默认值。")]),t._v(" "),a("p",[t._v("根据测试，我们可以在iphone和ipad上得到一个结论，就是无论你给layout viewpor设置的宽度是多少，而又没有指定初始的缩放值的话，那么iphone和ipad会自动计算initial-scale这个值，以保证当前layout viewport的宽度在缩放后就是浏览器可视区域的宽度，也就是说不会出现横向滚动条。比如说，在iphone上，我们不设置任何的viewport meta标签，此时layout viewport的宽度为980px，但我们可以看到浏览器并没有出现横向滚动条，浏览器默认的把页面缩小了。根据上面的公式，当前缩放值 = ideal viewport宽度  / visual viewport宽度，我们可以得出：")]),t._v(" "),a("p",[t._v("当前缩放值 = 320 / 980")]),t._v(" "),a("p",[t._v("也就是当前的initial-scale默认值应该是 0.33这样子。当你指定了initial-scale的值后，这个默认值就不起作用了。")]),t._v(" "),a("p",[t._v("总之记住这个结论就行了：在iphone和ipad上，无论你给viewport设的宽的是多少，如果没有指定默认的缩放值，则iphone和ipad会自动计算这个缩放值，以达到当前页面不会出现横向滚动条(或者说viewport的宽度就是屏幕的宽度)的目的。\n"),a("img",{attrs:{src:"/images/ref/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%913.png",alt:"Alt text"}})]),t._v(" "),a("h2",{attrs:{id:"动态改变viewport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态改变viewport"}},[t._v("#")]),t._v(" 动态改变viewport")]),t._v(" "),a("p",[t._v("1.可以使用document.write来动态输出meta viewport标签")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'<meta name="viewport" content="width=device-width,initial-scale=1">\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("2.通过setAttribute来改变")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testViewport"')]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"viewport"')]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"width = 380"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mvp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'testViewport'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmvp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'width=480'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("为了实现对不同设备的自适应布局，后面会用到。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("首先如果不设置meta viewport标签，那么移动设备上浏览器默认的宽度值为800px，980px，1024px等这些，总之是大于屏幕宽度的。这里的宽度所用的单位px都是指css中的px，它跟代表实际屏幕物理像素的px不是一回事。")]),t._v(" "),a("p",[t._v("第二、每个移动设备浏览器中都有一个理想的宽度，这个理想的宽度是指css中的宽度，跟设备的物理宽度没有关系，在css中，这个宽度就相当于100%的所代表的那个宽度。我们可以用meta标签把viewport的宽度设为那个理想的宽度，如果不知道这个设备的理想宽度是多少，那么用device-width这个特殊值就行了，同时initial-scale=1也有把viewport的宽度设为理想宽度的作用。所以，我们可以使用")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("来得到一个理想的viewport（也就是前面说的ideal viewport）。\n为什么需要有理想的viewport呢？比如一个分辨率为320x480的手机理想viewport的宽度是320px，而另一个屏幕尺寸相同但分辨率为640x960的手机的理想viewport宽度也是为320px，那为什么分辨率大的这个手机的理想宽度要跟分辨率小的那个手机的理想宽度一样呢？这是因为，只有这样才能保证同样的网站在不同分辨率的设备上看起来都是一样或差不多的。实际上，现在市面上虽然有那么多不同种类不同品牌不同分辨率的手机，但它们的理想viewport宽度归纳起来无非也就 320、360、384、400等几种，都是非常接近的，理想宽度的相近也就意味着我们针对某个设备的理想viewport而做出的网站，在其他设备上的表现也不会相差非常多甚至是表现一样的。")]),t._v(" "),a("p",[t._v("一句话解释："),a("code",[t._v("width=device-width, initial-scale=1可以让网站css的width=100%为手机屏幕的宽度")])]),t._v(" "),a("h1",{attrs:{id:"移动端适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端适配"}},[t._v("#")]),t._v(" 移动端适配")]),t._v(" "),a("p",[t._v("问题的引出：由viewport的知识我们可以知道同样大小的屏幕由于devicePixelRatio的不同,css中1px在不同屏幕上的表现是不一样的。")]),t._v(" "),a("p",[t._v("为了编写一套css就可以在移动端适配不同屏幕，最后选择使用淘宝的"),a("code",[t._v("lib-flexible弹性布局方案")]),t._v("，需要了解以下知识点。")]),t._v(" "),a("h2",{attrs:{id:"ui设计过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui设计过程"}},[t._v("#")]),t._v(" ui设计过程")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/ref/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%919.png",alt:"Alt text"}})]),t._v(" "),a("ol",[a("li",[t._v("以iphone6 750 x 1344为设计稿")]),t._v(" "),a("li",[t._v("在设计稿上按照实际大小进行px标注，并切出@2x图片（可以只切@3x）")]),t._v(" "),a("li",[t._v("矢量放大1.5倍后，切出@3x图")])]),t._v(" "),a("h2",{attrs:{id:"开发过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发过程"}},[t._v("#")]),t._v(" 开发过程")]),t._v(" "),a("p",[t._v("图片加载：")]),t._v(" "),a("ol",[a("li",[t._v("在devicePixelRatio<=2时，加载@2x切图")]),t._v(" "),a("li",[t._v("在devicePixelRatio>2时，加载@3x切图")])]),t._v(" "),a("p",[t._v("如果只切@3x图,那么就全加载@3x")]),t._v(" "),a("p",[t._v("元素尺寸计算：\n设计稿标注100px, css中使用rem = 100 / 75(该设计稿对应的html的font-size),即标注150px，代码中使用2rem\n设计稿对应的html的font-size计算"),a("code",[t._v("font-size = deviceWidth / 10")]),t._v(",所以750设计稿对应的字体大小为75")]),t._v(" "),a("h2",{attrs:{id:"vue中简化rem的计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue中简化rem的计算"}},[t._v("#")]),t._v(" vue中简化rem的计算")]),t._v(" "),a("p",[t._v("直接引用flexible.js,比较烦人的是每次都要手动计算rem,除以75还是很难算的。")]),t._v(" "),a("p",[t._v("可以使用scss定义一个@mixin px2rem($px)来进行rem的计算,但是写css的时候老是要@include px2rem(..)也很不方便，如果能直接写px，在编译时webpack帮我转成rem就好了。")]),t._v(" "),a("p",[t._v("使用px2rem-loader自动将css中的px转换成rem：")]),t._v(" "),a("ol",[a("li",[t._v("npm install px2rem-loader -s")]),t._v(" "),a("li",[t._v("打开build/utils.js文件，找到exports.cssLoaders方法，在里面添加如下代码")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" px2remLoader "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px2rem-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      remUint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("75")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设计稿根字体的大小")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("修改generateLoaders方法中的loaders")])]),t._v(" "),a("div",{staticClass:"language-JS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" loaders "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cssLoader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" px2remLoader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usePostCSS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  loaders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("postcssLoader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("注意：")]),t._v(" "),a("ol",[a("li",[t._v("此方法只能将.vue的style标签、.css文件中的px转成rem，不能将script标签和内联样式里面定义的px转成rem")]),t._v(" "),a("li",[t._v("如果在.vue文件style中的某一行代码不希望被转成rem，只要在后面写上注释 /* no*/就可以了")])]),t._v(" "),a("p",[t._v("规则：")]),t._v(" "),a("ol",[a("li",[t._v("width、height等需要转换为rem")]),t._v(" "),a("li",[t._v("border不需要转换,后面要加 /"),a("em",[t._v("no")]),t._v("/,原样输出")]),t._v(" "),a("li",[t._v("font-size比较特殊，后面要加 /"),a("em",[t._v("px")]),t._v("/,会根据dpr不同生成3套css（都是禁止缩放的，设置成no也一样）\n"),a("img",{attrs:{src:"/images/ref/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%9110.png",alt:"Alt text"}})])]),t._v(" "),a("h3",{attrs:{id:"引入第三方库问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入第三方库问题"}},[t._v("#")]),t._v(" 引入第三方库问题")]),t._v(" "),a("p",[t._v("使用了px2rem-loader后，第三方ui库的px也被转义成rem了，组件都变小了。")]),t._v(" "),a("p",[t._v("这是因为第三方一般都是按照initial-scale=1来开发适配的，使用了lib-flexible后我们在dpr=2时 initial-scale=1= 0.5")]),t._v(" "),a("p",[t._v("解决方法：remUint: 75 换成37.5, 这样第三方ui px全都扩大2倍, 代码中我们取设计图上px/2")]),t._v(" "),a("h2",{attrs:{id:"为啥是750px的设计稿"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为啥是750px的设计稿"}},[t._v("#")]),t._v(" 为啥是750px的设计稿")]),t._v(" "),a("p",[t._v("750px是iphone6的屏幕在css中的像素(750*1344)。")]),t._v(" "),a("p",[t._v("在iphone6出现之前，据说淘宝的设计师都是按iphone的尺寸出一套设计稿，安卓的设备也根据这套设计稿开发；iphone6出现之后，为了统一设计稿的标准，统一使用750的设计稿，iphone6 plus通过矢量放大的方式出@3x的设计稿，其它设备都按这两个稿开发。之所以用750，这是淘宝自己定的一个设计稿基准。")]),t._v(" "),a("h1",{attrs:{id:"font-boosting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#font-boosting"}},[t._v("#")]),t._v(" Font Boosting")]),t._v(" "),a("p",[t._v("在移动端页面开发中，使用一个css来设置元素中的font-size，但是对于同一个class设置，在不同元素中效果却不同，而且在调试的时候该表font-size发现也有相应，说明这个class有效果，但是在不同元素中却得到不同的效果，特别当元素中含有的文本元素数量差别较大时。")]),t._v(" "),a("p",[t._v("这个是一个叫font-boosting的问题，当文本数量太多，计算机认为在屏幕上显示这么多文本会导致用户不能清晰阅读时，他会自动设置font-size的大小，这个时候得到不同的字体大小的效果，")]),t._v(" "),a("p",[t._v("解决方法：在该元素的class中添加max-height:100%，这个对于元素显示没有效果，但是可以防止font-boosting。")]),t._v(" "),a("h1",{attrs:{id:"_1px-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1px-2"}},[t._v("#")]),t._v(" 1px")]),t._v(" "),a("p",[t._v("vux 1px解决方案")]),t._v(" "),a("h1",{attrs:{id:"iso-click延迟问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iso-click延迟问题"}},[t._v("#")]),t._v(" iso click延迟问题")]),t._v(" "),a("div",{staticClass:"language-javaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//解决ios click问题")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FastClick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("focus")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("targetElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deviceIsIOS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" targetElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setSelectionRange "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" targetElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'date'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" targetElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'time'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" targetElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'month'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" targetElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    targetElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    targetElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSelectionRange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    targetElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nFastClick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h1",{attrs:{id:"开启gzip压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启gzip压缩"}},[t._v("#")]),t._v(" 开启gzip压缩")]),t._v(" "),a("p",[t._v("webPack：使用compression-webpack-plugin")]),t._v(" "),a("p",[t._v('nginx：\ngzip  on;# 启用 gzip 压缩功能\ngzip_http_version 1.1; # 默认值是1.1，就是说对HTTP/1.1协议的请求才会进行gzip压缩\ngzip_vary on;\ngzip_comp_level 6; # 压缩级别，1压缩比最小处理速度最快，9压缩比最大但处理最慢，同时也最消耗CPU,一般设置为3就可以了\ngzip_proxied any;# nginx 做前端代理时启用该选项，表示无论后端服务器的headers头返回什么信息，都无条件启用压缩\ngzip_min_length  1024;# 最小压缩的页面，如果页面过于小，可能会越压越大，这里规定大于1K的页面才启用压缩\ngzip_buffers 16 8k;# 设置系统获取几个单位的缓存用于存储gzip的压缩结果数据流\ngzip_disable "MSIE [1-6].(?!.*SV1)";# 禁用IE6的gzip压缩')])])}),[],!1,null,null,null);s.default=n.exports}}]);