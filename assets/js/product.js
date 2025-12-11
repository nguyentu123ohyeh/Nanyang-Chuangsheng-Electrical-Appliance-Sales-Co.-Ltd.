const PRODUCTS = [
  // --- ROBOT VACUUMS (Category: cleaning) ---
  {
    id: 1,
    name: "智能扫地机器人 3合1 1500Pa大吸力 扫拖一体机 家用",
    category: "clean-water",
    img: "assets/img/img/RobotVacum/1.jpg",
    imgs: [
      "assets/img/img/RobotVacum/1.jpg",
      "assets/img/img/RobotVacum/1.1.jpg",
      "assets/img/img/RobotVacum/1.2.jpg",
      "assets/img/img/RobotVacum/1.3.jpg",
      "assets/img/img/RobotVacum/1.4.jpg"
    ],
    desc: "让清洁变得毫不费力！这款3合1智能扫地机器人拥有1500Pa强劲吸力，集扫地、吸尘、拖地于一体。智能导航系统确保覆盖家中每个角落，超薄机身轻松进入家具底部。适用于各种地面，是忙碌家庭的理想免手洗清洁方案！",
  },
  {
    id: 2,
    name: "智能APP定时 多种清洁模式 扫地机器人 干湿两用吸尘器",
    category: "clean-water",
    img: "assets/img/img/RobotVacum/2(61.26).jpg",
    imgs: [
      "assets/img/img/RobotVacum/2(61.26).jpg",
      "assets/img/img/RobotVacum/2.1.jpg",
      "assets/img/img/RobotVacum/2.2.jpg",
      "assets/img/img/RobotVacum/2.3.jpg"
    ],
    desc: "升级您的家庭清洁程序！这款先进的扫地机器人支持干湿两用，提供多种清洁模式。通过便捷的APP控制，您可以轻松预约清洁时间，即使不在家也能保持地面一尘不染。高效避障，彻底清洁每个房间。",
  },
  {
    id: 3,
    name: "3合1智能清洁机器人：吸尘、拖地、预约清洁、自动回充",
    category: "clean-water",
    img: "assets/img/img/RobotVacum/3(45.99).jpg",
    imgs: [
      "assets/img/img/RobotVacum/3(45.99).jpg",
      "assets/img/img/RobotVacum/3.1.jpg",
      "assets/img/img/RobotVacum/3.2.jpg",
      "assets/img/img/RobotVacum/3.3.jpg"
    ],
    desc: "体验轻松的家庭清洁！这款3合1智能清洁机器人集吸尘、拖地和扫地于一身。轻松预约清洁时间，让机器人搞定一切。具备自动回充功能，低电量时自动返回充电座。适用于所有地面类型。",
  },
  {
    id: 4,
    name: "智能自动吸尘机器人 强力吸尘扫地机 沿边清洁 可充电",
    category: "clean-water",
    img: "assets/img/img/RobotVacum/4(23.77).jpg",
    imgs: [
      "assets/img/img/RobotVacum/4(23.77).jpg",
      "assets/img/img/RobotVacum/4.1.jpg",
      "assets/img/img/RobotVacum/4.2.jpg",
      "assets/img/img/RobotVacum/4.3.jpg"
    ],
    desc: "这款智能自动吸尘器让地板保持洁净。设计有强劲吸力和沿边清洁技术，轻松吸走灰尘、污垢和宠物毛发。可充电电池确保无线操作，超薄设计可清洁家具底部。是日常维护的理想助手。",
  },
  {
    id: 5,
    name: "擦窗机器人 智能家居电器 自动玻璃窗清洁机",
    category: "clean-water",
    img: "assets/img/img/RobotVacum/5(288.34).jpg",
    imgs: [
      "assets/img/img/RobotVacum/5(288.34).jpg",
      "assets/img/img/RobotVacum/5.1.jpg",
      "assets/img/img/RobotVacum/5.2.jpg",
      "assets/img/img/RobotVacum/5.3.jpg"
    ],
    desc: "让擦窗变得轻松！这款智能擦窗机器人自动清洁玻璃窗、镜子甚至玻璃门。强力吸附，智能导航，让您的窗户一尘不染，无水痕。非常适合高处或难以触及的窗户，省时省力。",
  },
  {
    id: 6,
    name: "Thamtu 扫拖一体机器人 智能导航 强劲吸力",
    category: "clean-water",
    img: "assets/img/img/RobotVacum/6(89.09).jpg",
    imgs: [
      "assets/img/img/RobotVacum/6(89.09).jpg",
      "assets/img/img/RobotVacum/6.1.jpg",
      "assets/img/img/RobotVacum/6.2.jpg",
      "assets/img/img/RobotVacum/6.3.jpg"
    ],
    desc: "升级您的清洁方式！Thamtu 扫拖一体机结合了强力吸尘和高效拖地功能。采用智能导航技术，智能规划路线，避开障碍物，彻底清洁每个角落。非常适合处理宠物毛发、灰尘和污渍。",
  },
  {
    id: 7,
    name: "3合1扫地机器人 湿拖地板 智能家居扫地机",
    category: "clean-water",
    img: "assets/img/img/RobotVacum/7(20.29).jpg",
    imgs: [
      "assets/img/img/RobotVacum/7(20.29).jpg",
      "assets/img/img/RobotVacum/7.1.jpg",
      "assets/img/img/RobotVacum/7.2.jpg"
    ],
    desc: "简化您的家庭清洁！这款3合1扫地机器人集扫地、吸尘和湿拖于一体。智能传感器避开障碍物，确保每个角落都干净。多种清洁模式，超薄机身，轻松处理硬木地板、瓷砖和短毛地毯。",
  },
    {
    id: 8,
    name: "医用级便携式空气净化器 带智能显示屏 插电/电池两用",
    category: "air-climate",
    img: "assets/img/img/airpurifier/1(18.00).jpg",
    imgs: [
      "assets/img/img/airpurifier/1(18.00).jpg",
      "assets/img/img/airpurifier/1.1.jpg",
      "assets/img/img/airpurifier/1.2.jpg",
      "assets/img/img/airpurifier/1.3.jpg",
      "assets/img/img/airpurifier/1.4.jpg"
    ],
    desc: "随时随地呼吸新鲜空气！这款医用级便携空气净化器配有智能数字显示屏，可去除过敏原、灰尘和细菌。支持插电或电池供电，真正便携——非常适合家庭、办公室或旅行。",
  },
  {
    id: 9,
    name: "LED智能香氛机 办公室/家庭适用 智能扩香仪",
    category: "air-climate",
    img: "assets/img/img/airpurifier/2(139.49).jpg",
    imgs: [
      "assets/img/img/airpurifier/2(139.49).jpg",
      "assets/img/img/airpurifier/2.1.jpg",
      "assets/img/img/airpurifier/2.2.jpg",
      "assets/img/img/airpurifier/2.3.jpg",
      "assets/img/img/airpurifier/2.4.jpg"
    ],
    desc: "用这款LED智能香氛机改变您的空间！专为办公室和家庭设计，均匀静音地散发您喜爱的香气。LED显示屏和APP连接让您可以轻松自定义香氛计划，营造清新的氛围。",
  },
  {
    id: 10,
    name: "智能空气净化器2台装 带睡眠模式和双重滤网 - 提升空气质量",
    category: "air-climate",
    img: "assets/img/img/airpurifier/3(119.99).jpg",
    imgs: [
      "assets/img/img/airpurifier/3(119.99).jpg",
      "assets/img/img/airpurifier/3.1.jpg",
      "assets/img/img/airpurifier/3.2.jpg",
      "assets/img/img/airpurifier/3.3.jpg"
    ],
    desc: "双倍洁净空气覆盖！这套2台装智能空气净化器配备双重滤网和超静音睡眠模式，非常适合卧室、婴儿房或办公室。改善空气质量，让您日夜呼吸舒畅！",
  },
  {
    id: 11,
    name: "家用智能空气净化器",
    category: "air-climate",
    img: "assets/img/img/airpurifier/4(52.00).jpg",
    imgs: [
      "assets/img/img/airpurifier/4(52.00).jpg",
      "assets/img/img/airpurifier/4.1.jpg",
      "assets/img/img/airpurifier/4.2.jpg",
      "assets/img/img/airpurifier/4.3.jpg"
    ],
    desc: "这款智能空气净化器让您的空气保持清新洁净。先进的过滤系统去除灰尘、花粉、烟雾和异味，直观的控制让操作变得简单。是家庭或办公室任何房间的理想选择。",
  },
  {
    id: 12,
    name: "家用智能感应空气净化器 适用于大房间 过滤花粉/毛发/异味/烟雾",
    category: "air-climate",
    img: "assets/img/img/airpurifier/5(143.99).jpg",
    imgs: [
      "assets/img/img/airpurifier/5(143.99).jpg",
      "assets/img/img/airpurifier/5.1.jpg",
      "assets/img/img/airpurifier/5.2.jpg",
      "assets/img/img/airpurifier/5.3.jpg"
    ],
    desc: "带有智能传感器的空气净化器，轻松应对大空间内的过敏原和异味。自动检测并过滤花粉、宠物毛发、烟雾和气味，确保您的家保持清新健康。",
  },
  {
    id: 13,
    name: "智能触控空气净化器2台装 卧室专用 - 24dB静音运行",
    category: "air-climate",
    img: "assets/img/img/airpurifier/6(145.99).jpg",
    imgs: [
      "assets/img/img/airpurifier/6(145.99).jpg",
      "assets/img/img/airpurifier/6.1.jpg",
      "assets/img/img/airpurifier/6.2.jpg",
      "assets/img/img/airpurifier/6.3.jpg"
    ],
    desc: "享受静音、强力的空气清洁！这套2台装智能触控空气净化器运行噪音仅24dB，非常适合卧室和婴儿房。触控操作简单设置——呼吸更轻松，睡眠更香甜！",
  },
  {
    id: 14,
    name: "卧室空气净化器 支持Wifi/Alexa/APP控制 定时功能",
    category: "air-climate",
    img: "assets/img/img/airpurifier/7(38.35).jpg",
    imgs: [
      "assets/img/img/airpurifier/7(38.35).jpg",
      "assets/img/img/airpurifier/7.1.jpg",
      "assets/img/img/airpurifier/7.2.jpg",
      "assets/img/img/airpurifier/7.3.jpg"
    ],
    desc: "升级您的空气质量！这款支持WiFi的空气净化器可通过Alexa或专用APP控制设置，设定定时器，并监控空气质量——一切尽在手机掌控。非常适合卧室、办公室和智能家居。",
  },
  {
    id: 15,
    name: "智能Wifi互联 自动感应空气净化器 家用大空间",
    category: "air-climate",
    img: "assets/img/img/airpurifier/8(118.29).jpg",
    imgs: [
      "assets/img/img/airpurifier/8(118.29).jpg",
      "assets/img/img/airpurifier/8.1.jpg",
      "assets/img/img/airpurifier/8.2.jpg",
      "assets/img/img/airpurifier/8.3.jpg"
    ],
    desc: "轻松清洁大房间空气。这款智能WiFi互联空气净化器采用自动感应技术，根据空气质量自动调节净化级别，APP控制让您随处便捷操作。",
  },
  {
    id: 16,
    name: "家用大空间智能空气净化器 过滤花粉/毛发/烟雾",
    category: "air-climate",
    img: "assets/img/img/airpurifier/9(112.29).jpg",
    imgs: [
      "assets/img/img/airpurifier/9(112.29).jpg",
      "assets/img/img/airpurifier/9.1.jpg",
      "assets/img/img/airpurifier/9.2.jpg",
      "assets/img/img/airpurifier/9.3.jpg"
    ],
    desc: "让每个角落的空气更洁净！这款智能空气净化器专为大房间设计，高效过滤花粉、宠物毛发、烟雾和异味。智能控制和强力过滤保持您的家清新健康。",
  },

  // --- AIR PURIFIERS (Category: cleaning / office) ---

  {
    id: 17,
    name: "3合1 蒸发式冷风机 (便携式空调)",
    category: "air-climate",
    img: "assets/img/conditioner/1.jpg",
    imgs: [
      "assets/img/conditioner/1.jpg",
      "assets/img/conditioner/1.1.jpg",
      "assets/img/conditioner/1.2.jpg",
      "assets/img/conditioner/1.3.jpg"
    ],
    desc: "适用于室内卧室，具有 4 种模式和 3 档速度，12 小时定时，1 加仑可拆卸水箱，配有 4 个冰袋和遥控器，支持 70° 摆风。",
  },
  {
    id: 18,
    name: "无窗空调 (蒸发式冷风机)",
    category: "air-climate",
    img: "assets/img/conditioner/2.jpg",
    imgs: [
      "assets/img/conditioner/2.jpg",
      "assets/img/conditioner/2.1.jpg",
      "assets/img/conditioner/2.2.jpg",
      "assets/img/conditioner/2.3.jpg"
    ],
    desc: "具有 4 种模式和 3 档速度，缺水警报，2.4 加仑水箱可制冷 20 小时，12 小时定时，20 英尺遥控距离，70° 自动摆风，适合卧室使用。",
  },
  {
    id: 19,
    name: "1700ml 便携式蒸发冷风机",
    category: "air-climate",
    img: "assets/img/conditioner/3.jpg",
    imgs: [
      "assets/img/conditioner/3.jpg",
      "assets/img/conditioner/3.1.jpg",
      "assets/img/conditioner/3.2.jpg",
      "assets/img/conditioner/3.3.jpg"
    ],
    desc: "带遥控器，120° 摆风迷你便携式空调，3 档速度和 1-7 小时定时，适合室内卧室和办公室使用的风扇装置。",
  },
  {
    id: 20,
    name: "无窗便携式空调 (3合1 装置)",
    category: "air-climate",
    img: "assets/img/conditioner/4.jpg",
    imgs: [
      "assets/img/conditioner/4.jpg",
      "assets/img/conditioner/4.1.jpg",
      "assets/img/conditioner/4.2.jpg",
      "assets/img/conditioner/4.3.jpg"
    ],
    desc: "15 小时定时和 120° 摆风，带遥控器，2 加仑水箱，3 种模式和 3 档速度，超静音 24 英寸无管道冷风机，适合家庭办公室，白色。",
  },
  {
    id: 21,
    name: "1250ml 迷你便携式冷风扇",
    category: "air-climate",
    img: "assets/img/conditioner/5.jpg",
    imgs: [
      "assets/img/conditioner/5.jpg",
      "assets/img/conditioner/5.1.jpg",
      "assets/img/conditioner/5.2.jpg",
      "assets/img/conditioner/5.3.jpg"
    ],
    desc: "具有 3 档速度和 1-3 小时定时，适合卧室、房间、办公室桌面的便携式空调扇。",
  },
  {
    id: 22,
    name: "8 张交叉切割碎纸机和信用卡粉碎机 (黑色)",
    category: "office",
    img: "assets/img/shredder/1.jpg",
    imgs: [
      "assets/img/shredder/1.jpg",
      "assets/img/shredder/1.1.jpg",
      "assets/img/shredder/1.2.jpg",
      "assets/img/shredder/1.3.jpg"
    ],
    desc: "黑色交叉切割设计，适合处理纸张和信用卡，办公家用皆宜。",
  },
  {
    id: 23,
    name: "14 张交叉切割碎纸机",
    category: "office",
    img: "assets/img/shredder/2.jpg",
    imgs: [
      "assets/img/shredder/2.jpg",
      "assets/img/shredder/2.1.jpg",
      "assets/img/shredder/2.2.jpg",
      "assets/img/shredder/2.3.jpg"
    ],
    desc: "6.6 加仑废纸篓，P-4 安全级别，3 种模式设计，防卡纸重型碎纸机，适合家庭和办公室使用。",
  },
  {
    id: 24,
    name: "重型交叉切割碎纸机 (6 张容量)",
    category: "office",
    img: "assets/img/shredder/3.jpg",
    imgs: [
      "assets/img/shredder/3.jpg",
      "assets/img/shredder/3.1.jpg",
      "assets/img/shredder/3.2.jpg",
      "assets/img/shredder/3.3.jpg"
    ],
    desc: "适合家庭办公室，可碎纸和信用卡，3.7 加仑容量，黑色。",
  },
  {
    id: 25,
    name: "重型自动进纸碎纸机 (400 张容量)",
    category: "office",
    img: "assets/img/shredder/4.jpg",
    imgs: [
      "assets/img/shredder/4.jpg",
      "assets/img/shredder/4.1.jpg",
      "assets/img/shredder/4.2.jpg",
      "assets/img/shredder/4.3.jpg"
    ],
    desc: "微切 P5 安全级别，防卡纸文件粉碎机，13.2 加仑带轮拉出式废纸篓，适合家庭/办公室/商业用途。",
  },
  {
    id: 26,
    name: "紧凑型室内插入式智能安防摄像头 (2个装)",
    category: "security",
    img: "assets/img/camera/1.jpg",
    imgs: [
      "assets/img/camera/1.jpg",
      "assets/img/camera/1.1.jpg",
      "assets/img/camera/1.2.jpg",
      "assets/img/camera/1.3.jpg"
    ],
    desc: "1080p 高清视频，夜视，运动检测，双向音频，设置简单，支持 Alexa，白色。",
  },
  {
    id: 27,
    name: "Ring 室内摄像头",
    category: "security",
    img: "assets/img/camera/2.jpg",
    imgs: [
      "assets/img/camera/2.jpg",
      "assets/img/camera/2.1.jpg",
      "assets/img/camera/2.2.jpg",
      "assets/img/camera/2.3.jpg"
    ],
    desc: "适用于家庭或商业安防，1080p 高清视频，白色。",
  },
  {
    id: 28,
    name: "2K 家庭安防室内摄像头 (2025 升级版)",
    category: "security",
    img: "assets/img/camera/3.jpg",
    imgs: [
      "assets/img/camera/3.jpg",
      "assets/img/camera/3.1.jpg",
      "assets/img/camera/3.2.jpg",
      "assets/img/camera/3.3.jpg"
    ],
    desc: "2.4GHz & 5GHz WiFi，360 度云台，内置聚光灯，人体自动追踪，警报器，宠物/婴儿/监控，支持手机 App，黑色。",
  },
  {
    id: 29,
    name: "2K 360° WiFi 室内安防摄像头 (2个装)",
    category: "security",
    img: "assets/img/camera/4.jpg",
    imgs: [
      "assets/img/camera/4.jpg",
      "assets/img/camera/4.1.jpg",
      "assets/img/camera/4.2.jpg",
      "assets/img/camera/4.3.jpg"
    ],
    desc: "云台控制，宠物/婴儿监控，支持手机 App，双向音频，夜视，24/7 云端及 Micro SD 卡存储。",
  },
  {
    id: 30,
    name: "便携式 UV 台面反渗透滤水器",
    category: "clean-water",
    img: "assets/img/water/1.jpg",
    imgs: [
      "assets/img/water/1.jpg",
      "assets/img/water/1.1.jpg",
      "assets/img/water/1.2.jpg",
      "assets/img/water/1.3.jpg"
    ],
    desc: "5 级水过滤系统，无需安装，5:1 纯水废水比，适合家庭厨房办公室的 RO 净水器。",
  },
  {
    id: 31,
    name: "台面 RO+UV 滤水器 (热水和常温水)",
    category: "clean-water",
    img: "assets/img/water/2.jpg",
    imgs: [
      "assets/img/water/2.jpg",
      "assets/img/water/2.1.jpg",
      "assets/img/water/2.2.jpg",
      "assets/img/water/2.3.jpg"
    ],
    desc: "5 级过滤系统带矿化功能，经过 IAPMO 测试和 NSF 认证，无需安装，便携式滤水器。",
  },
  {
    id: 32,
    name: "Mate-3 台面反渗透滤水系统",
    category: "clean-water",
    img: "assets/img/water/3.jpg",
    imgs: [
      "assets/img/water/3.jpg",
      "assets/img/water/3.1.jpg",
      "assets/img/water/3.2.jpg",
      "assets/img/water/3.3.jpg"
    ],
    desc: "8 级净化，3:1 纯水废水比，无需安装，智能感应出水，便携式 RO 净水器。",
  },
  {
    id: 33,
    name: "UV 反渗透台面滤水器",
    category: "clean-water",
    img: "assets/img/water/4.jpg",
    imgs: [
      "assets/img/water/4.jpg",
      "assets/img/water/4.1.jpg",
      "assets/img/water/4.2.jpg",
      "assets/img/water/4.3.jpg"
    ],
    desc: "5 级 RO 水过滤系统，5:1 纯水废水比，无需安装，适合家庭厨房的便携式净水器。",
  },
];