import '../styles/App.css';

// Mock Data
export const mockProducts = [
    {
        id: 1,
        name: "React Complete Course - Từ Cơ Bản Đến Nâng Cao",
        price: 1299000,
        originalPrice: 1999000,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
        category: "Lập trình",
        instructor: "Nguyễn Văn A",
        rating: 4.8,
        reviews: 245,
        description: "Khóa học React hoàn chỉnh từ cơ bản đến nâng cao, bao gồm hooks, context API, và các best practices.",
        isNew: true,
        discount: 35
    },
    {
        id: 2,
        name: "UI/UX Design Fundamentals",
        price: 899000,
        originalPrice: 1299000,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
        category: "Thiết kế",
        instructor: "Trần Thị B",
        rating: 4.9,
        reviews: 189,
        description: "Học thiết kế UI/UX từ cơ bản, sử dụng Figma và Adobe XD để tạo ra các sản phẩm đẹp mắt.",
        isNew: false,
        discount: 30
    },
    {
        id: 3,
        name: "Digital Marketing Mastery",
        price: 1599000,
        originalPrice: 2299000,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        category: "Marketing",
        instructor: "Lê Văn C",
        rating: 4.7,
        reviews: 312,
        description: "Chiến lược marketing số hoàn chỉnh, từ SEO, SEM đến Social Media Marketing.",
        isNew: true,
        discount: 30
    },
    {
        id: 4,
        name: "Python for Data Science",
        price: 1099000,
        originalPrice: 1499000,
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop",
        category: "Data Science",
        instructor: "Phạm Thị D",
        rating: 4.6,
        reviews: 156,
        description: "Học Python cho Data Science, bao gồm pandas, numpy, matplotlib và machine learning cơ bản.",
        isNew: false,
        discount: 25
    },
    {
        id: 5,
        name: "English Communication Skills",
        price: 799000,
        originalPrice: 1199000,
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
        category: "Ngôn ngữ",
        instructor: "Sarah Johnson",
        rating: 4.8,
        reviews: 428,
        description: "Cải thiện kỹ năng giao tiếp tiếng Anh trong môi trường công việc và đời sống.",
        isNew: false,
        discount: 33
    },
    {
        id: 6,
        name: "Photography Basics",
        price: 899000,
        originalPrice: 1299000,
        image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
        category: "Nhiếp ảnh",
        instructor: "Hoàng Văn E",
        rating: 4.5,
        reviews: 89,
        description: "Học nhiếp ảnh cơ bản, từ kỹ thuật chụp đến chỉnh sửa ảnh cơ bản.",
        isNew: true,
        discount: 30
    },
    {
        id: 7,
        name: "Node.js & Express Backend Development",
        price: 1399000,
        originalPrice: 1999000,
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
        category: "Lập trình",
        instructor: "Đặng Minh F",
        rating: 4.7,
        reviews: 203,
        description: "Xây dựng API và backend hoàn chỉnh với Node.js, Express và MongoDB.",
        isNew: true,
        discount: 30
    },
    {
        id: 8,
        name: "Graphic Design với Adobe Creative Suite",
        price: 1199000,
        originalPrice: 1699000,
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
        category: "Thiết kế",
        instructor: "Võ Thị G",
        rating: 4.6,
        reviews: 167,
        description: "Thành thạo Photoshop, Illustrator và InDesign để tạo ra các thiết kế chuyên nghiệp.",
        isNew: false,
        discount: 29
    },
    {
        id: 9,
        name: "Video Marketing & YouTube Growth",
        price: 899000,
        originalPrice: 1299000,
        image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop",
        category: "Marketing",
        instructor: "Ngô Văn H",
        rating: 4.5,
        reviews: 134,
        description: "Chiến lược marketing video và phát triển kênh YouTube từ 0 đến 100k subscribers.",
        isNew: true,
        discount: 30
    },
    {
        id: 10,
        name: "Machine Learning cơ bản với Python",
        price: 1499000,
        originalPrice: 2199000,
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
        category: "Data Science",
        instructor: "Lý Thị I",
        rating: 4.8,
        reviews: 298,
        description: "Học machine learning từ cơ bản, các thuật toán phổ biến và ứng dụng thực tế.",
        isNew: false,
        discount: 32
    },
    {
        id: 11,
        name: "IELTS Speaking & Writing Intensive",
        price: 1099000,
        originalPrice: 1599000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        category: "Ngôn ngữ",
        instructor: "Michael Brown",
        rating: 4.9,
        reviews: 567,
        description: "Luyện thi IELTS intensive, tập trung vào Speaking và Writing để đạt band 7.0+.",
        isNew: true,
        discount: 31
    },
    {
        id: 12,
        name: "Wedding Photography Masterclass",
        price: 1299000,
        originalPrice: 1899000,
        image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=300&fit=crop",
        category: "Nhiếp ảnh",
        instructor: "Trương Văn J",
        rating: 4.7,
        reviews: 78,
        description: "Chuyên sâu về nhiếp ảnh cưới, từ kỹ thuật chụp đến xử lý ảnh chuyên nghiệp.",
        isNew: false,
        discount: 32
    },
    {
        id: 13,
        name: "Flutter Mobile App Development",
        price: 1599000,
        originalPrice: 2299000,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
        category: "Lập trình",
        instructor: "Phan Thị K",
        rating: 4.6,
        reviews: 189,
        description: "Phát triển ứng dụng mobile đa nền tảng với Flutter và Dart.",
        isNew: true,
        discount: 30
    },
    {
        id: 14,
        name: "3D Animation với Blender",
        price: 1399000,
        originalPrice: 1999000,
        image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=300&fit=crop",
        category: "Thiết kế",
        instructor: "Bùi Văn L",
        rating: 4.4,
        reviews: 95,
        description: "Tạo animation 3D chuyên nghiệp với Blender, từ modeling đến rendering.",
        isNew: false,
        discount: 30
    },
    {
        id: 15,
        name: "E-commerce Business Strategy",
        price: 1199000,
        originalPrice: 1699000,
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        category: "Kinh doanh",
        instructor: "Châu Thị M",
        rating: 4.8,
        reviews: 245,
        description: "Xây dựng và phát triển business e-commerce từ A đến Z, bao gồm Shopify và dropshipping.",
        isNew: true,
        discount: 29
    },
    {
        id: 16,
        name: "Tiếng Nhật N5-N3 Complete",
        price: 999000,
        originalPrice: 1499000,
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&h=300&fit=crop",
        category: "Ngôn ngữ",
        instructor: "Tanaka Hiroshi",
        rating: 4.7,
        reviews: 324,
        description: "Học tiếng Nhật từ N5 đến N3, bao gồm Hiragana, Katakana, Kanji và giao tiếp thực tế.",
        isNew: false,
        discount: 33
    },
    // KHÓA HỌC DƯỚI 500K
    {
        id: 17,
        name: "HTML & CSS cơ bản",
        price: 299000,
        originalPrice: 499000,
        image: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?w=400&h=300&fit=crop",
        category: "Lập trình",
        instructor: "Nguyễn Thị N",
        rating: 4.3,
        reviews: 567,
        description: "Học HTML và CSS từ cơ bản, tạo website đầu tiên của bạn.",
        isNew: false,
        discount: 40
    },
    {
        id: 18,
        name: "Microsoft Office Essentials",
        price: 399000,
        originalPrice: 599000,
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
        category: "Kinh doanh",
        instructor: "Lê Thị O",
        rating: 4.4,
        reviews: 892,
        description: "Thành thạo Word, Excel, PowerPoint cho công việc văn phòng.",
        isNew: false,
        discount: 33
    },
    {
        id: 19,
        name: "Photoshop cơ bản cho người mới",
        price: 449000,
        originalPrice: 699000,
        image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&h=300&fit=crop",
        category: "Thiết kế",
        instructor: "Phạm Văn P",
        rating: 4.2,
        reviews: 234,
        description: "Học Photoshop cơ bản, chỉnh sửa ảnh và thiết kế đơn giản.",
        isNew: true,
        discount: 35
    },
    {
        id: 20,
        name: "Tiếng Anh giao tiếp hàng ngày",
        price: 349000,
        originalPrice: 599000,
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&h=300&fit=crop",
        category: "Ngôn ngữ",
        instructor: "Emma Wilson",
        rating: 4.5,
        reviews: 1234,
        description: "Học tiếng Anh giao tiếp cơ bản cho cuộc sống hàng ngày.",
        isNew: false,
        discount: 42
    },
    {
        id: 21,
        name: "Kỹ năng chụp ảnh điện thoại",
        price: 199000,
        originalPrice: 399000,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
        category: "Nhiếp ảnh",
        instructor: "Vũ Thị Q",
        rating: 4.1,
        reviews: 445,
        description: "Chụp ảnh đẹp bằng điện thoại, tips và tricks thực tế.",
        isNew: true,
        discount: 50
    },
    {
        id: 22,
        name: "Social Media Marketing cơ bản",
        price: 299000,
        originalPrice: 499000,
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
        category: "Marketing",
        instructor: "Đỗ Văn R",
        rating: 4.3,
        reviews: 678,
        description: "Marketing trên Facebook, Instagram cho doanh nghiệp nhỏ.",
        isNew: false,
        discount: 40
    },
    // KHÓA HỌC TRÊN 2M
    {
        id: 23,
        name: "Full Stack Web Development Bootcamp",
        price: 2499000,
        originalPrice: 3999000,
        image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop",
        category: "Lập trình",
        instructor: "Nguyễn Minh S",
        rating: 4.9,
        reviews: 145,
        description: "Bootcamp 6 tháng từ zero đến full stack developer, bao gồm React, Node.js, MongoDB, deployment.",
        isNew: true,
        discount: 37
    },
    {
        id: 24,
        name: "Advanced AI & Machine Learning Specialization",
        price: 2999000,
        originalPrice: 4499000,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
        category: "Data Science",
        instructor: "Dr. Trần Thị T",
        rating: 4.8,
        reviews: 89,
        description: "Chuyên sâu về AI và ML, từ Deep Learning, Neural Networks đến deployment model production.",
        isNew: true,
        discount: 33
    },
    {
        id: 25,
        name: "Complete Digital Marketing MBA",
        price: 2799000,
        originalPrice: 3999000,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        category: "Marketing",
        instructor: "Lê Minh U",
        rating: 4.7,
        reviews: 234,
        description: "MBA Digital Marketing hoàn chỉnh, từ strategy đến execution, bao gồm case studies thực tế.",
        isNew: false,
        discount: 30
    },
    {
        id: 26,
        name: "Professional UX/UI Design Mastery",
        price: 2199000,
        originalPrice: 3299000,
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
        category: "Thiết kế",
        instructor: "Phạm Thị V",
        rating: 4.9,
        reviews: 167,
        description: "Thiết kế UX/UI chuyên nghiệp, từ research đến prototyping, bao gồm portfolio development.",
        isNew: true,
        discount: 33
    },
    {
        id: 27,
        name: "International Business English Certification",
        price: 2399000,
        originalPrice: 3499000,
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop",
        category: "Ngôn ngữ",
        instructor: "James Anderson",
        rating: 4.8,
        reviews: 456,
        description: "Tiếng Anh thương mại quốc tế, preparation cho TOEIC, BEC và các certification khác.",
        isNew: false,
        discount: 31
    },
    {
        id: 28,
        name: "Professional Photography & Post-Processing",
        price: 2299000,
        originalPrice: 3299000,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
        category: "Nhiếp ảnh",
        instructor: "Hoàng Thị W",
        rating: 4.6,
        reviews: 123,
        description: "Nhiếp ảnh chuyên nghiệp từ A-Z, bao gồm studio setup, lighting, Lightroom & Photoshop advanced.",
        isNew: true,
        discount: 30
    },
    {
        id: 29,
        name: "Startup to Scale Business Masterclass",
        price: 2699000,
        originalPrice: 3899000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        category: "Kinh doanh",
        instructor: "CEO Nguyễn Văn X",
        rating: 4.9,
        reviews: 89,
        description: "Từ startup đến scale-up, bao gồm fundraising, team building, market expansion strategies.",
        isNew: true,
        discount: 31
    }
];

export const categories = [
    "Tất cả",
    "Lập trình",
    "Thiết kế",
    "Marketing",
    "Data Science",
    "Ngôn ngữ",
    "Nhiếp ảnh",
    "Kinh doanh"
];

export const priceRanges = [
    { label: "Tất cả", min: 0, max: Infinity },
    { label: "Dưới 500K", min: 0, max: 500000 },
    { label: "500K - 1M", min: 500000, max: 1000000 },
    { label: "1M - 2M", min: 1000000, max: 2000000 },
    { label: "Trên 2M", min: 2000000, max: Infinity }
];