/* ---------------------- */
/* MENU MOBILE            */
/* ---------------------- */
const menuBtn = document.getElementById("menuMobileBtn");
const navMobile = document.getElementById("navMobile");

menuBtn.addEventListener("click", () => {
    navMobile.classList.toggle("show");
});


/* ---------------------- */
/* PRODUTOS DINÂMICOS     */
/* ---------------------- */

const produtos = [
    {
        nome: "Fone de Alta Performance",
        desc: "Cancelamento de ruído e áudio 3D premium.",
        img: "https://images.unsplash.com/photo-1583394838336-acd977736f90"
    },
    {
        nome: "Smartwatch Executive",
        desc: "Monitora saúde, notificações e produtividade.",
        img: "https://images.unsplash.com/photo-1517430816045-df4b7de01f2a"
    },
    {
        nome: "Notebook UltraSlim",
        desc: "Leve, rápido e perfeito para trabalho corporativo.",
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
        nome: "Câmera 4K Pro",
        desc: "Grava em 4K com estabilização avançada.",
        img: "https://images.unsplash.com/photo-1495433324511-bf8e92934d90"
    }
];

const lista = document.getElementById("listaProdutos");

produtos.forEach((p, i) => {
    lista.innerHTML += `
        <div class="card">
            <img src="${p.img}" alt="${p.nome}">
            <h3>${p.nome}</h3>
            <p>${p.desc}</p>
            <button onclick="addCarrinho('${p.nome}')">Adicionar ao Carrinho</button>
        </div>
    `;
});


/* ---------------------- */
/* CARRINHO               */
/* ---------------------- */
let carrinho = [];
const modal = document.getElementById("modalCarrinho");
const cartList = document.getElementById("cartList");
const btnCart = document.getElementById("btnCart");
const btnCartMobile = document.getElementById("btnCartMobile");
const fecharModal = document.getElementById("fecharModal");

function addCarrinho(prod) {
    carrinho.push(prod);
    alert(`${prod} foi adicionado ao carrinho!`);
}

btnCart.addEventListener("click", abrirModal);
btnCartMobile.addEventListener("click", abrirModal);
fecharModal.addEventListener("click", () => modal.style.display = "none");

function abrirModal() {
    cartList.innerHTML = "";
    carrinho.forEach(item => {
        cartList.innerHTML += `<li>${item}</li>`;
    });

    modal.style.display = "flex";
}
