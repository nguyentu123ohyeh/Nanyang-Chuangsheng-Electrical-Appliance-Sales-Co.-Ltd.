// ==================== CẤU HÌNH ====================
const PAGE_SIZE = 9;
let currentPage = 1;
let currentCategory = 'all';

// ==================== TIỆN ÍCH ====================
function limitText(str, maxLength) {
    if (!str) return '';
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}

function getFilteredProducts() {
    return currentCategory === 'all' 
        ? PRODUCTS 
        : PRODUCTS.filter(p => p.category === currentCategory);
}

// ==================== RENDER DANH SÁCH ====================
function renderProducts(page) {
    const productList = document.getElementById("product-list");
    if (!productList) return;

    const filteredProducts = getFilteredProducts();
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const productsToShow = filteredProducts.slice(start, end);

    if (productsToShow.length === 0) {
        productList.innerHTML = `<div class="col-12 text-center py-5"><h4 style="color: var(--default-color);">No products found.</h4></div>`;
        return;
    }

    productList.innerHTML = productsToShow.map(product => `
        <div class="col-md-4 col-sm-6 mb-4 d-flex align-items-stretch" data-aos="fade-up">
            <div class="card h-100 shadow-sm w-100 border-0" style="background-color: var(--surface-color);">
                <div class="overflow-hidden bg-white position-relative">
                    <a href="product-detail.html?id=${product.id}">
                        <img src="${product.img}" class="product-img-fixed card-img-top" alt="${product.name}" 
                        style="height: 250px; object-fit: cover; width: 100%; transition: 0.3s;"
                        onmouseover="this.style.transform='scale(1.05)'"
                        onmouseout="this.style.transform='scale(1)'"
                        onerror="this.src='https://placehold.co/600x400?text=No+Image'">
                    </a>
                </div>
                <div class="card-body d-flex flex-column p-4">
                    <h5 class="card-title fw-bold">
                        <a href="product-detail.html?id=${product.id}" style="color: var(--heading-color); text-decoration: none;">
                            ${limitText(product.name, 40)}
                        </a>
                    </h5>
                    <p class="card-text flex-grow-1 small" style="color: var(--default-color); opacity: 0.7;">
                        ${limitText(product.desc, 90)}
                    </p>
                    <div class="mt-3">
                        <a href="product-detail.html?id=${product.id}" class="btn w-100" 
                           style="background-color: var(--accent-color); color: #fff; border: none; transition: 0.3s;">
                           Detail
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// ==================== PHÂN TRANG ====================
function renderPagination() {
    const pagination = document.getElementById("pagination");
    if (!pagination) return;

    const totalPages = Math.ceil(getFilteredProducts().length / PAGE_SIZE);
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    // Style cho nút phân trang để hợp màu tối
    const btnStyle = `background-color: var(--surface-color); color: var(--default-color); border: 1px solid rgba(255,255,255,0.1); margin: 0 5px;`;
    const activeStyle = `background-color: var(--accent-color); color: #fff; border-color: var(--accent-color); margin: 0 5px;`;

    let html = '';

    // Nút Previous
    html += `<li class="page-item${currentPage === 1 ? ' disabled' : ''}">
        <a class="page-link shadow-none" href="#" onclick="goToPage(${currentPage - 1}); return false;" style="${btnStyle}">&laquo;</a>
    </li>`;

    // Logic tạo số trang
    let pageLinks = [];
    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) pageLinks.push(i);
    } else {
        if (currentPage <= 3) {
            pageLinks = [1, 2, 3, 4, '...', totalPages];
        } else if (currentPage >= totalPages - 2) {
            pageLinks = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        } else {
            pageLinks = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
        }
    }

    pageLinks.forEach(page => {
        if (page === '...') {
            html += `<li class="page-item disabled"><span class="page-link" style="background: transparent; border: none; color: var(--default-color);">...</span></li>`;
        } else {
            html += `<li class="page-item${page === currentPage ? ' active' : ''}">
                <a class="page-link shadow-none" href="#" onclick="goToPage(${page}); return false;" style="${page === currentPage ? activeStyle : btnStyle}">${page}</a>
            </li>`;
        }
    });

    // Nút Next
    html += `<li class="page-item${currentPage === totalPages ? ' disabled' : ''}">
        <a class="page-link shadow-none" href="#" onclick="goToPage(${currentPage + 1}); return false;" style="${btnStyle}">&raquo;</a>
    </li>`;

    pagination.innerHTML = html;
}

function goToPage(page) {
    const totalPages = Math.ceil(getFilteredProducts().length / PAGE_SIZE);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderProducts(currentPage);
    renderPagination();
    
    const productSection = document.getElementById('products');
    if(productSection) productSection.scrollIntoView({ behavior: 'smooth' });
}

// ==================== CHI TIẾT SẢN PHẨM ====================
function renderProductDetail() {
    const detailDiv = document.getElementById('product-detail');
    if (!detailDiv) return;

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'), 10);
    const product = PRODUCTS.find(p => p.id === id);

    if (!product) {
        detailDiv.innerHTML = `
            <div class="text-center py-5">
                <h2 style="color: var(--heading-color);">Product not found</h2>
                <a href="product.html" class="btn mt-3" style="background-color: var(--accent-color); color: #fff;">Back to Products</a>
            </div>
        `;
        return;
    }

    const imgs = product.imgs && product.imgs.length ? product.imgs : [product.img];
    
    detailDiv.innerHTML = `
        <a href="product.html" class="btn btn-outline-secondary mb-4" style="color: var(--default-color); border-color: var(--default-color);">&larr; Back to Products</a>
        <div class="row">
            <div class="col-md-6 mb-4">
                <div class="card border-0" style="background-color: var(--surface-color);">
                    <div class="bg-white p-2 rounded">
                        <img src="${imgs[0]}" id="main-product-img" class="img-fluid rounded shadow-sm" alt="${product.name}">
                    </div>
                    <div class="d-flex mt-3 gap-2 overflow-auto">
                        ${imgs.map((img, idx) => `
                            <img src="${img}" class="product-thumb rounded border ${idx === 0 ? 'border-primary' : ''}" 
                                 style="width: 80px; height: 80px; object-fit: cover; cursor: pointer; background: #fff; border-color: ${idx === 0 ? 'var(--accent-color) !important' : '#dee2e6'};" 
                                 onclick="switchImage(this, '${img}')">
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <h2 class="fw-bold" style="color: var(--heading-color);">${product.name}</h2>
                <div class="p-3 rounded mt-3" style="background-color: var(--surface-color);">
                    <p class="lead mb-0" style="color: var(--default-color); font-size: 1rem;">${product.desc}</p>
                </div>
                <hr style="border-color: rgba(255,255,255,0.1);">
                <div class="mt-4">
                    <button class="btn btn-lg px-5" style="background-color: var(--accent-color); color: #fff; border: none;">Contact to Order</button>
                </div>
            </div>
        </div>
    `;
}

// Helper chuyển ảnh
window.switchImage = function(el, src) {
    document.getElementById('main-product-img').src = src;
    document.querySelectorAll('.product-thumb').forEach(t => {
        t.classList.remove('border-primary');
        t.style.borderColor = '#dee2e6';
    });
    el.classList.add('border-primary');
    el.style.borderColor = 'var(--accent-color)';
}

// ==================== KHỞI TẠO ====================
document.addEventListener('DOMContentLoaded', function() {
    // 1. Xử lý trang danh sách
    if (document.getElementById('product-list')) {
        renderProducts(currentPage);
        renderPagination();

        // Sự kiện click tab danh mục
        const tabs = document.querySelectorAll('#product-tabs .nav-link');
        tabs.forEach(tab => {
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                currentCategory = this.getAttribute('data-category');
                currentPage = 1; // Reset về trang 1 khi đổi danh mục
                renderProducts(currentPage);
                renderPagination();
            });
        });
    }

    // 2. Xử lý trang chi tiết
    if (document.getElementById('product-detail')) {
        renderProductDetail();
    }
});