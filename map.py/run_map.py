<!DOCTYPE html>
<html>
<head>
    <title>خريطة الدراسة الميدانية</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <style>
        #map { height: 100vh; width: 100%; }
        .popup-img { width: 200px; border-radius: 5px; }
    </style>
</head>
<body>

    <div id="map"></div>

    <script>
        // 1. إنشاء الخريطة وتحديد المركز (عدلي الإحداثيات دي لأول نقطة عندك)
        var map = L.map('map').setView([30.0444, 31.2357], 14); 

        // 2. إضافة خريطة الأساس من OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        // 3. إضافة النقاط يدويًا (بما إننا مش هنقرا الـ CSV هنا عشان الزهق)
        // جربي في أول نقطتين كدة:
        
        // النقطة الأولى: حطي إحداثياتها واسم صورتها من الجدول بتاعك
        var p1 = L.marker([30.0444, 31.2357]).addTo(map);
        p1.bindPopup('<b>ID: 1</b><br><img class="popup-img" src="images/1.jpg">');

        // النقطة الثانية:
        var p2 = L.marker([30.0500, 31.2400]).addTo(map);
        p2.bindPopup('<b>ID: 2</b><br><img class="popup-img" src="images/2.jpg">');

    </script>
</body>
</html>