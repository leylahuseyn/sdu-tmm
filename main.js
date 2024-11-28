const menuItems = [
    { title: "SDU-nun strukturu", section: "Struktur" },
    { title: "Fakültələrin strukturu", section: "Struktur" },
    { title: "Son 5 ilin professor müəllim heyəti", section: "Statistika" },
    { title: "2019-2023 üzrə imtahan sessiya göstəriciləri", section: "Statistika" },
    { title: "2019-2024 - Kafedralar üzrə dərs yükü", section: "Statistika" },
    { title: "Müqayisələr 2023-2024, 2024-2025", section: "Statistika" },
    { title: "Cari məlumatlar", section: "Göstəricilər" },
    { title: "Fakültələr", section: "Göstəricilər" },
    { title: "Tədris göstəriciləri üzrə fayllar", section: "Göstəricilər" },
    { title: "Tələbəyönümlü tədris", section: "Daxili qaydalar" },
    { title: "Metodik vəsait", section: "Daxili qaydalar" },
    { title: "Təhsil haqqı ödənişi", section: "Daxili qaydalar" }
];

function performSearch() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const results = menuItems.filter(item => item.title.toLowerCase().includes(query));
    const resultsDiv = document.getElementById("search-results");
  
    if (results.length === 0) {
        resultsDiv.innerHTML = "<p>Heç bir nəticə tapılmadı.</p>";
    } else {
        resultsDiv.innerHTML = "<ul>" + results.map(item => {
            return `<li><a href="#">${item.title} - ${item.section}</a></li>`;
        }).join("") + "</ul>";
    }
}


