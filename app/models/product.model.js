const sql = require("./db.js");

// 생성자 
const Product = function(product){
    this.itemName = product.itemName;
    this.price = product.price;
    this.company = product.company;
};

// product로 조회
Product.findById = (product, result)=>{
    sql.query('select itemName, FORMAT(price, 0) AS price, DATE_FORMAT(register_date, \'%Y-%m-%d\') AS register_date, company from product WHERE itemName = ?',product, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("found product: ", res[0]);
            result(null, res[0]);
            return;
        }

        // 결과가 없을 시 
        result({kind: "not_found"}, null);
    });
};

// product 전체 조회
Product.getAll = result =>{
    var hash = new Map();
    sql.query('select count(*) as item from product', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        hash["total_item_count"] = res[0]["item"];

        sql.query('select itemName, FORMAT(price, 0) AS price, DATE_FORMAT(register_date, \'%Y-%m-%d\') AS register_date, company from product', (err, re)=>{
            if(err){
                console.log("error: ", err);
                result(err, null);
                return;
            }
            
            hash["list"] = re;
            console.log("product: ", hash);
            result(null, hash);
        });
    });
};

// product로 삭제
Product.remove = (product, result)=>{
    sql.query('DELETE FROM product WHERE itemName = ?',product, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.affectedRows ==0){
            // id 결과가 없을 시 
            result({kind: "not_found"}, null);
            return;
        }

        console.log("deleted product with itemName: ", product);
        result(null, res);
    });
};

// product 전체 삭제
Product.removeAll = result =>{
    sql.query('DELETE FROM product',(err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.affectedRows ==0){
            // id 결과가 없을 시 
            result({kind: "not_found"}, null);
            return;
        }

        console.log('deleted ${res.affectedRows} product');
        result(null, res);
    });
};

module.exports = Product;