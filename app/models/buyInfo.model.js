const sql = require("./db.js");

// 생성자 
const BuyInfo = function(buyInfo){
    this.product = buyInfo.product;
    this.buyer = buyInfo.buyer;
    this.price = buyInfo.price;
};

// buyer로 조회
BuyInfo.findById = (buyer, result)=>{
    sql.query('select num, product, buyer, FORMAT(price, 0) AS price, DATE_FORMAT(buy_day, \'%Y-%m-%d\') AS buy_day from buyinfo WHERE buyer = ?',buyer, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("found buyInfo: ", res[0]);
            result(null, res[0]);
            return;
        }

        // 결과가 없을 시 
        result({kind: "not_found"}, null);
    });
};

// buyer 전체 조회
BuyInfo.getAll = result =>{
    var hash = new Map();
    sql.query('select count(*) as item from buyinfo', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        hash["total_buyInfo_count"] = res[0]["item"];

        sql.query('select num, product, buyer, FORMAT(price, 0) AS price, DATE_FORMAT(buy_day, \'%Y-%m-%d\') AS buy_day from buyinfo', (err, re)=>{
            if(err){
                console.log("error: ", err);
                result(err, null);
                return;
            }
            
            hash["list"] = re;
            console.log("buyInfo: ", hash);
            result(null, hash);
        });
    });
};

// buyer로 삭제
BuyInfo.remove = (buyer, result)=>{
    sql.query('DELETE FROM buyinfo WHERE buyer = ?',buyer, (err, res)=>{
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

        console.log("deleted buyInfo with name: ", buyer);
        result(null, res);
    });
};

// buyer 전체 삭제
BuyInfo.removeAll = result =>{
    sql.query('DELETE FROM buyinfo',(err, res)=>{
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

        console.log('deleted ${res.affectedRows} buyInfo');
        result(null, res);
    });
};

module.exports = BuyInfo;