function Book(props) {
    const image = React.createElement("img", {
        src: props.image,
        width: 250,
        height: 250,
        alt: "Book Image"
    }, null);
    const h3 = React.createElement("h3", {}, props.title);
    const h4 = React.createElement("h4", {}, props.price);
    const btn = React.createElement("button", {}, "Add to cart");
    const child = React.createElement("div", { className: "card" }, image, h3, h4, btn);
    return child;
}

const books = [
    { image: "https://m.media-amazon.com/images/I/31WIiECCtxL._AC_UF1000,1000_QL80_.jpg", title: "Physics", price: "₹341" },
    { image: "https://m.media-amazon.com/images/I/51-uPEZKHsL._AC_UF1000,1000_QL80_.jpg", title: "Chemistry", price: "₹501" },
    { image: "https://m.media-amazon.com/images/I/91oCkbtq1CL.jpg", title: "Maths", price: "₹800" }
];

const bookele = books.map(b =>
    React.createElement(Book, {
        image: b.image,
        title: b.title,
        price: b.price
    }, null)
);

const booklist = React.createElement("div", {className:"booklist"}, bookele);
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(booklist);