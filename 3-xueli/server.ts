import express from 'express';
import bodyParser from 'body-parser'

const app=express();
app.use(bodyParser.json());  //解析body，以json形式返回

class Course{
    constructor(public id:number,public courseName:string,public images:string,public task:number,public person:number,public score:number,public detail:string){

    }
}
class Video{
    constructor(public id:number,public courseName:String,public images:string,public detail:string,public time:number,public person:number){}
}
class Infos{
    constructor(public id:number,public touxiang:string,public images:string,public name:string,public detail:string,public author:string,public time:string,public read:number,public comment:number){}
}
class Tongzhi{
    constructor(public id:number,public touxiang:string,public name:string,public fangfa:string,public detail:string,public detail2:string,public time:string,public zan:number){}
}
class Qieshuo{
    constructor(public id:number,public touxiang:string,public name:string,public studier:string,public task:string,public detail:string,public time:string,public pinglun:number){}
}
const tongbu1=[
    new Course(1, '2016级混合应用开发', 'http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130', 10, 90,0,''),
    new Course(2, '2016级数据结构', 'http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130', 12, 91,90,'在计算机科学中，数据结构是一门研究非数值计算的程序设计问题中计算机的操作对象（数据元素）以及它们之间的关系和运算等的学科，而且确保经过这些运算后所得到的新结构仍然是原来的结构类型。'),
    new Course(3, '2018级计算机导论', 'http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130', 8, 91,93,'计算机导论课程讲授计算机运行大概过程、简单数值数据在计算机中的表示、计算机硬件的基本组成以及计算机软件的相关知识。'),
    new Course(4, '2018级信息素养', 'http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130',5, 91,98,'2018级学生《信息素养实践》课程在线同步课。'),
    new Course(5, '2016级HTML5与CSS3前端开发', 'http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130', 14, 91,10,'本课程主要学习HTML5的新特性、CSS3的新特性以及前端开发框架Bootstrap。'),
    new Course(6, '2017级Web开发(二)', 'http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130',20, 87,89,''),
    new Course(7, '2017级coding暑期训练营', 'http://usercontent.edu2act.cn/media/team/18-07-09/J3LxZ5cMMP9JFjGuDbSsh8.png?imageView2/1/w/230/h/130',11, 91,0,'本活动是为17级暑期训练营而创建，由源码公社和编程俱乐部发起，为17级的同学巩固基本语法、写程序的基本思路，并在此基础上，增加java的预习知识篇以及基本算法的基本培训。'),
    new Course(8, '软件过程', 'http://usercontent.edu2act.cn/media/team/18-05-31/GvVrSCw2H2XBgXjLdgTvmc.jpeg?imageView2/1/w/230/h/130',3, 92,91,'')
];
const tongbu2=[
    new Course(1, '2016级混合应用开发', 'http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130', 10, 90,0,''),
    new Course(2, '2016级数据结构', 'http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130', 12, 91,90,'在计算机科学中，数据结构是一门研究非数值计算的程序设计问题中计算机的操作对象（数据元素）以及它们之间的关系和运算等的学科，而且确保经过这些运算后所得到的新结构仍然是原来的结构类型。'),
    new Course(5, '2016级HTML5与CSS3前端开发', 'http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130', 14, 91,10,'本课程主要学习HTML5的新特性、CSS3的新特性以及前端开发框架Bootstrap。')
];
const vcourses=[
    new Video(1,'Github开源之旅视频','http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190','完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull',14,3735),
    new Video(2,'CSS3基础','http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190','CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性。',12,2317),
    new Video(3,'HTML5基础','http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190','HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。是原有HTML4标准的一个超集。本课程主要介绍HTML5的新特性以及相应API。',12,1312),
    new Video(4,'Selenium IDE WEB自动化测试入门视频课程（中）','http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190','上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。',13,3794),
    new Video(5,'扩展的ICONIX软件过程实践','http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190','ICONIX软件过程的主体设计思想是尽早进入编码阶段，缩短分析设计周期的软件开发方法合理的简化统一过程(RUP)， 基于极限编程(XP)和敏捷软件开发的思想。 ICONIX过程与 UML和RUP相比，是轻量级的过程。本实践课程是基于12306火车票购票系统的例子全面讲解ICONIX各阶段生成的UML模型以及EA工具的使用。',12,2269),
    new Video(6,'网页制作与开发','http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190','本课程利用线上与线下相结合的授课方式，以网页开发主流软件Dreamweaver为工具，教给学生快速搭建网站的方法。培养学生具备能够利用有限的代码快速搭建出网站页面的能力。',42,1572),
    new Video(7,'产品&amp;交互设计那些事儿','http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190','本课程是和学员一起探讨交流关于产品设计和交互设计的一些经验教训，结合具体案例讲解了一些在具体设计某些功能点时需要注意的问题。',5,1084),
    new Video(8,'VR AR产品设计的思考视频课程','http://usercontent.edu2act.cn/media/cs/16-09-08/2sLJNqumrjAEQjwGMCGRN5.png?imageView2/1/w/320/h/190','“2016是VR元年”，这一观点早已在计算机互联网行业中流行开来，与VR相关的各种分析研究也是层出不穷。而随着Google Cardboard等技术逐渐普及，VR使用成本也在不断降低。',3,4335),
];
const vcourse=[
    new Video(1,'Github开源之旅视频','http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190','完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远程仓库之间 push 和 pull',14,3735),
    new Video(2,'软件测试基础','http://usercontent.edu2act.cn/media/cs/15-11-02/4tKc5uShYJVaBCHmf9yjzj.jpg?imageView2/1/w/320/h/190','软件测试基础',71,29668),
];
const infos=[
    new Infos(1,'http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg','WEB开发（二）—— 函数','（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。<br>（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式 注： 不需要在函数声明的后面添加一','3-张馨元','2018-10-11 15:30',1281,4),
    new Infos(2,'http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg','类定义关键字详解','JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就','3-张馨元','2018-10-09 19:21',60,0),
    new Infos(3,'http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg','数据结构——线性表的经典应用','1. 一元多项式的表示和相加        在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定。因此，','杨伟彬','2018-10-28 14:28',52,0),
    new Infos(4,'http://usercontent.edu2act.cn/media/userheader/18-03-11/H2v8Qhkq4DnS33dBbBYKMo.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg','栈和队列之间的相互转化','队列实现栈需要两个队列data，help，因为队列是先进先出，想要模拟栈的结构，每次取栈顶的元素也就相当于取队列中队尾的元素，要取data队列的队尾元素，需将最后一个元素前面的先取走，才能取到最后一个元素，所以，将前面的元素逐个弹出到','7-李建涛','2018-10-1 12:51',58,2),
    new Infos(5,'http://usercontent.edu2act.cn/media/userheader/15-11-10/8pt3Ph9aDFbAveubDWgN5Y.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/RWcUSnA6qeiKBmf5KK96K9.jpg','JavaScript event(事件对象)','在触发DOM 上的某个事件时，会产生一个事件对象 event，这个对象中包含着所有与事件有关的信息。包括导致事件的元素、事件的类型以及其他与特定事件相关的信息。例如，鼠标操作导致的事件对象中，会包含鼠标位置的信息，而键盘操作导致','刘梦祎','2018-9-28 09:40',53,0)
];
const tongzhis=[
    new Tongzhi(1,'http://usercontent.edu2act.cn/media/userheader/18-08-20/jdCbgJFE2hNnpd3PwZEhP3.png?imageView2/1/w/256/h/256','王艳华','@全体成员','在第五次任务检查过程中，我惊喜的发现有同学在自行查阅资料，寻得课堂之外的解决方案，非常好，特此表扬！！！','拓展知识分享：删除重复元素的程序，列表的count（）方法也是一种不错的解决方案。','2016-11-09 11:31',1),
    new Tongzhi(2,'http://usercontent.edu2act.cn/media/userheader/18-08-20/jdCbgJFE2hNnpd3PwZEhP3.png?imageView2/1/w/256/h/256','王艳华','@全体成员','任务4根据目前提交情况看，大家做的普遍较好。需要注意的是，第7题，在编译器中编写并调试下，有些细节需要在实践中去体会。','','2016-10-27 17:30',1),
    new Tongzhi(2,'http://usercontent.edu2act.cn/media/userheader/18-08-20/jdCbgJFE2hNnpd3PwZEhP3.png?imageView2/1/w/256/h/256','王艳华','@全体成员','同学们，任务1已经发布，在领取任务之后，要在规定的时间之内完成并提交系统，大家奔走相告啊~','','2016-10-09 14:17',2),
];
const qieshuos=[
    new Qieshuo(1,'http://usercontent.edu2act.cn/media/userheader/18-08-20/jdCbgJFE2hNnpd3PwZEhP3.png?imageView2/1/w/256/h/256','王艳华','#2016级7、8班计算机导论#','任务11：office应用','按照下列要求设置“学生成绩表”，将截图提交雪梨：1.找出学生英语成绩低于70分的,并用不同颜色标出2.选出英语成绩高于80分或数学成绩高于80分的（要求自动筛选、高级筛选）3.分别统计男生和女生的总分平均分','2016-12-21 15:37',4),
    new Qieshuo(2,'http://usercontent.edu2act.cn/media/userheader/18-08-20/jdCbgJFE2hNnpd3PwZEhP3.png?imageView2/1/w/256/h/256','王艳华','#2016级7、8班计算机导论#','任务10：程序设计导引（二）和OS','1、根据自己的理解谈一谈软件生命周期2、简述什么是操作系统，操作系统的分类有哪些？3、描述进程的三种状态，以及转化过程。','2016-11-28 15:50',0),
]
app.get('/api/tongbu1/:id',(req,res)=>{
    //console.log(req.params);
    //res.json(courses.filter((ele)=>ele.id ==req.params.id ));
    res.json(tongbu1.find((ele)=>ele.id ==req.params.id ));
    //res.end(JSON.stringify(courses));
});
app.get('/api/tongbu1',(req,res)=>{
    res.json(tongbu1);
});
app.get('/api/tongbu2/:id',(req,res)=>{
    res.json(tongbu2.find((ele)=>ele.id ==req.params.id ));
});
app.get('/api/tongbu2',(req,res)=>{
    res.json(tongbu2);
});
app.get('/api/vcourses',(req,res)=>{
    res.json(vcourses);
});
app.get('/api/vcourse',(req,res)=>{
    res.json(vcourse);
});
app.get('/api/infos',(req,res)=>{
    res.json(infos);
});
app.get('/api/tongzhis',(req,res)=>{
    res.json(tongzhis);
});
app.get('/api/qieshuos',(req,res)=>{
    res.json(qieshuos);
});
// app.get('/api',(req,res)=>{
//     res.json(courses);
// });
// app.get('/api',(req,res)=>{
//     res.json(tongbu1);
// });
// app.post('/api',(req,res)=>{
//     console.log(req.body)
//     res.json(courses);
// });
app.listen(8000);