import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ContainerCartIcon from "./icons/ContainerCartIcon";
import ContaineCartsProducst from "./ContaineCartsProducst";

const Header = ({
  allProducts,
  setAllProducts,
  total,
  setTotal,
  setCountProducts,
  countProducts,
}) => {
  const [active, setActive] = useState(false);
  const onDeleteProduct = (exam) => {
    const results = allProducts.filter((item) => item.id !== exam.id);
    setTotal(total - exam.price * exam.quantity);
    setCountProducts(countProducts - exam.quantity);
    setAllProducts(results);
  };
  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };
  const pdfRef = useRef();
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("inbioslab.pdf");
    });
  };
  return (
    <header>
      <img src="logo.png" alt="INBIOSLAB" className="w-14 h-15" />
      <h1 className="text-lime-500 font-bold text-3xl">
        Cotizador Online INBIOSLAB
      </h1>

      <div className="container-icon ">
        <ContainerCartIcon
          countProducts={countProducts}
          active={active}
          setActive={setActive}
        />

        <ContaineCartsProducst
          active={active}
          allProducts={allProducts}
          pdfRef={pdfRef}
          onDeleteProduct={onDeleteProduct}
          downloadPDF={downloadPDF}
          onCleanCart={onCleanCart}
          total={total}
        />
      </div>
    </header>
  );
};

export default Header;
