const sql = require("./db.js");

// 생성자 
const Buyer = function(buyer){
    this.name = buyer.name;
    this.tel = buyer.tel;
};

// buyer로 조회
Buyer.findById = (buyer, result)=>{
    sql.query('select * from buyer WHERE name = ?',buyer, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("found buyer: ", res[0]);
            result(null, res[0]);
            return;
        }

        // 결과가 없을 시 
        result({kind: "not_found"}, null);
    });
};

// buyer 전체 조회
Buyer.getAll = result =>{
    var hash = new Map();
    sql.query('select count(*) as item from buyer', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        hash["total_buyer_count"] = res[0]["item"];

        sql.query('select * from buyer', (err, re)=>{
            if(err){
                console.log("error: ", err);
                result(err, null);
                return;
            }
            
            hash["list"] = re;
            console.log("buyer: ", hash);
            result(null, hash);
        });
    });
};

// buyer로 삭제
Buyer.remove = (buyer, result)=>{
    sql.query('DELETE FROM buyer WHERE name = ?',buyer, (err, res)=>{
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

        console.log("deleted buyer with name: ", buyer);
        result(null, res);
    });
};

// buyer 전체 삭제
Buyer.removeAll = result =>{
    sql.query('DELETE FROM buyer',(err, res)=>{
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

        console.log('deleted ${res.affectedRows} buyer');
        result(null, res);
    });
};

module.exports = Buyer;