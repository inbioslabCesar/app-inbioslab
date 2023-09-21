import React from 'react'
import IconDeleteProductCart from './icons/IconDeleteProductCart'

const ContaineCartsProducst = ({active, allProducts, pdfRef, onDeleteProduct, downloadPDF, onCleanCart, total}) => {
  return (
    <div
    className={`container-cart-products ${active ? "" : "hidden-cart"}`}>
    {allProducts.length ? (
      <>
        <div className="contenedorPDF" ref={pdfRef}>
          <div className="row-product">
            {allProducts.map((exam) => (
              <div className="cart-product" key={exam.id}>
                <div className="info-cart-product">
                  <span className="cantidad-producto-carrito bg-black rounded-full text-white w-6 h-8 text-center">
                    {exam.quantity}
                  </span>
                  <p className="titulo-producto-carrito uppercase">
                    {exam.exam}
                  </p>
                  <span className="precio-producto-carrito">
                    S/ {exam.price}.00
                  </span>
                </div>
                <IconDeleteProductCart
                  onDeleteProduct={onDeleteProduct}
                  exam={exam}
                />
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total:</h3>
            <span className="total-pagar">S/ {total}.00</span>
          </div>
        </div>
        <div className="row text-center mt-5 ">
          <button className="btn-clear-all" onClick={downloadPDF}>
            PDF
          </button>
        </div>
        <button className="btn-clear-all" onClick={onCleanCart}>
          Vaciar Carrito
        </button>
      </>
    ) : (
      <p className="cart-empty">El carrito está vacío</p>
    )}
  </div>
  )
}

export default ContaineCartsProducst
