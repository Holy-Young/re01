// 这里存放所有课程数据，以后增加课程只需复制粘贴 { ... } 这一块
const courseData = [
    {
        id: "L01", // 唯一编号
        title: "第1课：欢迎走进信息科技“酷”世界",
        desc: "破学生对 “信息科技” 的陌生感，用 “酷” 的视角激发兴趣，建立对学科的初步认知",
        tags: ["基础", "入门"], // 标签
        difficulty: 1, // 难度 1-5 星
        // 以下路径对应 assets 文件夹里的文件
        cover: "assets/images/cover1.jpg", 
        video: "assets/videos/demo1.mp4",
        code: "assets/code/src1.zip",
        ppt: "assets/slides/slide1.pdf",
        teacherNote: "本节课重点在于理解'英文标点符号'的重要性。" // 老师寄语
    },
    {
        id: "L02",
        title: "第2课：认识慧编程",
        desc: "从 “陌生” 到 “初步掌握” 慧编程的基础操作，为后续编程创作打基础",
        tags: ["界面认识"],
        difficulty: 2,
        cover: "assets/images/cover2.jpg",
        video: "assets/videos/demo2.mp4",
        code: "assets/code/src2.zip",
        ppt: "assets/slides/slide2.pdf",
        teacherNote: "循环结构是绘制重复图形的关键！"
    },
    {
        id: "L03",
        title: "第3课：赛博鱼缸",
        desc: "使用 Turtle 库绘制五角星和复杂的螺旋线。",
        tags: ["图形化", "趣味"],
        difficulty: 3,
        cover: "assets/images/cover3.jpg",
        video: "assets/videos/demo3.mp4",
        code: "assets/code/src3.zip",
        ppt: "assets/slides/slide3.pdf",
        teacherNote: "循环结构是绘制重复图形的关键！"
    },
    {
        id: "L04",
        title: "第4课：猫和老鼠",
        desc: "使用 Turtle 库绘制五角星和复杂的螺旋线。",
        tags: ["图形化", "趣味"],
        difficulty: 3,
        cover: "assets/images/cover3.jpg",
        video: "assets/videos/demo3.mp4",
        code: "assets/code/src3.zip",
        ppt: "assets/slides/slide3.pdf",
        teacherNote: "循环结构是绘制重复图形的关键！"
    },
    {
        id: "L05",
        title: "第5课：植物大战僵尸",
        desc: "使用 Turtle 库绘制五角星和复杂的螺旋线。",
        tags: ["图形化", "趣味"],
        difficulty: 3,
        cover: "assets/images/cover3.jpg",
        video: "assets/videos/demo3.mp4",
        code: "assets/code/src3.zip",
        ppt: "assets/slides/slide3.pdf",
        teacherNote: "循环结构是绘制重复图形的关键！"
    }
    // 复制上方结构，添加第n课...
];