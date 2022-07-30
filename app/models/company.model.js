const sql = require("./db.js");

// 생성자 
const Company = function(company){
    this.name = company.name;
    this.ceo = company.ceo;
    this.tel = company.tel;
};

// company로 조회
Company.findById = (company, result)=>{
    sql.query('select * from company WHERE name = ?',company, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("found company: ", res[0]);
            result(null, res[0]);
            return;
        }

        // 결과가 없을 시 
        result({kind: "not_found"}, null);
    });
};

// company 전체 조회
Company.getAll = result =>{
    var hash = new Map();
    sql.query('select count(*) as item from company', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        hash["total_company_count"] = res[0]["item"];

        sql.query('select * from company', (err, re)=>{
            if(err){
                console.log("error: ", err);
                result(err, null);
                return;
            }
            
            hash["list"] = re;
            console.log("company: ", hash);
            result(null, hash);
        });
    });
};

// company로 삭제
Company.remove = (company, result)=>{
    sql.query('DELETE FROM company WHERE name = ?',company, (err, res)=>{
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

        console.log("deleted company with name: ", company);
        result(null, res);
    });
};

// company 전체 삭제
Company.removeAll = result =>{
    sql.query('DELETE FROM company',(err, res)=>{
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

        console.log('deleted ${res.affectedRows} company');
        result(null, res);
    });
};

module.exports = Company;