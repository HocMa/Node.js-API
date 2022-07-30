module.exports = app =>{
    const shop = require("../controllers/shop.controller.js");

    //------------------------ product ------------------------
    
    // product 전체 조회 
    app.get("/product", shop.findProductAll);

    // productName으로 조회
    app.get("/product/:product", shop.findProductOne);

    // productName으로 삭제
    app.delete("/product/:product", shop.deleteProduct);

    // product 전체 삭제
    app.delete("/product", shop.deleteProductAll);

    //------------------------ company -------------------------------

    // company 전체 조회 
    app.get("/company", shop.findCompanyAll);
    
    // companyName으로 조회
    app.get("/company/:company", shop.findCompanyOne);

    // companyName으로 삭제
    app.delete("/company/:company", shop.deleteCompany);

    // company 전체 삭제
    app.delete("/company", shop.deleteCompanyAll);

    //------------------------- buyer ---------------------------------

    // buyer 전체 조회 
    app.get("/buyer", shop.findBuyerAll);
    
    // buyerName으로 조회
    app.get("/buyer/:buyer", shop.findBuyerOne);

    // companyName으로 삭제
    app.delete("/buyer/:buyer", shop.deleteBuyer);

    // company 전체 삭제
    app.delete("/buyer", shop.deleteBuyerAll);

    //------------------------- buyInfo ---------------------------------

    // buyInfo 전체 조회 
    app.get("/buyinfo", shop.findBuyInfoAll);
    
    // buyerName으로 조회
    app.get("/buyInfo/:buyer", shop.findBuyInfoOne);

    // companyName으로 삭제
    app.delete("/buyInfo/:buyer", shop.deleteBuyInfo);

    // company 전체 삭제
    app.delete("/buyInfo", shop.deleteBuyInfoAll);
};