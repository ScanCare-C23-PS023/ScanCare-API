const products = [
    {
        id : "1",
        brand : "Garnier",
        kind : "Face Wash",
        rating : "4.5",
        imageURL : "https://storage.googleapis.com/scancare-db/products/Garnier.png",
        bgColor : "#D1E0D5",
        desc : "Foam pembersih wajah yang membersihkan wajah dengan lembut dan membantu mencerahkan kulit wajah. Sabun cuci muka dengan bahan alami menggunakan Sari Lemon yang berguna untuk membersihkan wajah dengan lembut dan membantu mencerahkan kulit wajah. Aroma lemon yang terdapat di dalamnya membuat kulit terasa segar setelah menggunakannya.",
        time : "Dua kali sehari",
        ingredients : "Vitamin c"
    },
    {
        id : "2",
        brand : "L'Oreal",
        kind : "Micro Essence",
        rating : "5",
        imageURL : "https://storage.googleapis.com/scancare-db/products/L'Oreal.png",
        bgColor : "#D1E0D5",
        desc : "L'Oréal Paris Revitalift Crystal Micro Essence adalah essence untuk membuat kulit tampak sebening kristal. Dilengkapi dengan Micronized Technology, essence ini dapat menyerap hingga 10 lapisan kulit. Teksturnya ringan dan tidak meninggalkan rasa lengket.",
        time : "Dua kali sehari",
        ingredients : "Centella Asiatica"
    },
    {
        id : "3",
        brand : "Acnes",
        kind : "Face Wash",
        rating : "4.3",
        imageURL : "https://storage.googleapis.com/scancare-db/products/Acnes.png",
        bgColor : "#F6E3E7",
        desc : "Produk pembersih wajah ini membantu membersihkan wajah, menjaga kelembaban, serta membantu mencerahkan wajah. Selain itu, produk ini juga membantu melawan bakteri penyebab jerawat sehingga membantu mencegah jerawat, serta mencerahkan dan menyamarkan bekas jerawat.",
        time : "Dua kali sehari",
        ingredients: "Natural Active Ingredient"
    },
    {
        id : "4",
        brand : "Wardah",
        kind : "Moisturizer",
        rating : "4.8",
        imageURL : "https://storage.googleapis.com/scancare-db/products/Wardah.png",
        bgColor : "#F6E3E7",
        desc : "Pelembab khusus untuk perawatan kulit yang rentan berjerawat, untuk menjaga hidrasi kulit sekaligus melindunginya dari sinar UV.",
        time : "Setiap pagi",
        ingredients: "DermaTreat Actives"
    },
    {
        id : "5",
        brand : "Scarlett",
        kind : "Acne Serum",
        rating : "4.9",
        imageURL : "https://storage.googleapis.com/scancare-db/products/Scarlett.png",
        bgColor : "#D1E0D5",
        desc : "Scarlett Whitening Acne Serum memiliki kemampuan untuk menghilangkan jerawat dan menjaga kulit agar jerawat membandel tidak datang lagi.",
        time: "Dua kali sehari",
        ingredients: "Salicylic Acid"
    },
    {
        id : "6",
        brand : "Emina",
        kind : "Moisturizer",
        rating : "4.6",
        imageURL : "https://storage.googleapis.com/scancare-db/products/Emina.png",
        bgColor : "#D1E0D5",
        desc : "Produk ini mampu mencerahkan dan melembabkan wajah. Pelembab yang mengandung Ekstrak Summer Plum dan Vitamin E ini juga diperkaya dengan UVA dan UVB filter yang juga melindungi kulit wajah dari sinar matahari. Formulanya ringan, bisa dipakai setiap hari dan bikin wajah kamu terlihat matte sepanjang hari.",
        time: "Dua kali sehari",
        ingredients: "Summer Plum Extract"
    },
    {
        id : "7",
        brand : "MS Glow",
        kind : "Night Cream",
        rating : "4.8",
        imageURL : "https://storage.googleapis.com/scancare-db/products/MS%20Glow.png",
        bgColor : "#D1E0D5",
        desc: "Acne Night Cream dari MS Glow adalah cream malam khusus untuk kulit yang cenderung berminyak dan berjerawat, diperkaya dengan Tea tree Oil dan sulfur sebagai anti bakteri , mengontrol minyak berlebih dan membantu merawat kulit berjerawat sehingga dapat menenangkan dan meredakan dan menyembuhkan jerawat di wajah.",
        time: "Sebelum tidur",
        ingredients: "Tea Tree Oil"
    },
    {
        id : "8",
        brand : "COSRX",
        kind : "Gel Cleanser",
        rating : "4.6",
        imageURL : "https://storage.googleapis.com/scancare-db/products/CosrX.png",
        bgColor : "#F6E3E7",
        desc : "COSRX LOW PH GOOD MORNING GEL CLEANSER merupakan pembersih wajah yang digunakan untuk menenangkan, mengeksfoliasi, melembapkan sekaligus membersihkan kulit wajah. Kandungan pada produk ini memiliki kadar acid yang mirip dengan kadar pH kulit sehingga efektif membersihkan wajah menjadi bersih dan segar.", 
        time: "Dua kali sehari",
        ingredients: "Cocamidopropyl Betaine"
    },
    {
        id : "9",
        brand : "Pond's",
        kind : "Facial Foam",
        rating : "4.5",
        imageURL : "https://storage.googleapis.com/scancare-db/products/Pond's.png",
        bgColor : "#F6E3E7",
        desc : "POND'S ACNE SOLUTION FACIAL FOAM merupakan busa pembersih wajah dengan kandungan Thymo-T Essence, Niacinamide, Salicylic Acid yang membantu membersihkan wajah dari debu, polusi, dan bakteri penyebab jerawat.",
        time : "Dua kali sehari",
        ingredients: "Thymo-T Essence"
    },
    {
        id : "10",
        brand : "Kahf",
        kind : "Face Wash",
        rating : "4.4",
        imageURL : "https://storage.googleapis.com/scancare-db/products/Kahf.png",
        bgColor : "#D1E0D5",
        desc : "Keunggulan dari Kahf Oil and Acne Care Face Wash yakni memiliki perpaduan formula HydroBalance dan Pure Cleanse untuk hasil wajah bersih dan lembap menyeluruh, sehingga tidak perlu khawatir kulit menjadi kering dan kaku.",
        time : "Dua kali sehari",
        ingredients: "HydroBalance"
    },
    {
        id : "11",
        brand : "Dermatix",
        kind : "Gel",
        rating : "4.9",
        imageURL : "https://storage.googleapis.com/scancare-db/products/Dermatix.png",
        bgColor : "#F6E3E7",
        desc : "Dermatix Acne Spot Care mengandung cyclopentasiloxane (CPX) yang merupakan silikon gel cepat kering yang mudah menyebar membentuk lapisan tipis yang cepat kering. Mudah diserap ke dalam kulit dan tidak lengket, membantu menghilangkan bekas luka jerawat di kulit.",
        time : "Dua kali sehari",
        ingredients: "Niacinamide"
    },
    {
        id : "12",
        brand : "Safi",
        kind : "Face Wash",
        rating : "4.3",
        imageURL : "https://storage.googleapis.com/scancare-db/products/Safi.png",
        bgColor : "#F6E3E7",
        desc : "Safi White Expert Purifying Cleanser merupakan pembersih wajah yang mengandung bahan-bahan alami seperti ekstrak Habbatus Sauda dan teknologi OxyWhite yang dapat membersihkan debu dan kotoran yang menyumbat pori-pori, membersihkan sisa make up dengan seksama, membantu menjaga kelembapan kulit wajah dan cocok untuk semua jenis kulit.",
        time : "Dua kali sehari",
        ingredients: "Habbatus Sauda"
    },
];

module.exports = products;