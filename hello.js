const obj = {
    'age': '18',
    'name': 'oumingyuan',
    'language': {
        'first': 'chinese',
        'second': 'english',
        'computer': {
            'first': 'java',
        }
    }
};

function convert(obj) {
    let data_list = [];

    //第一层循环
    Object.keys(obj).forEach(function (key) {
        let data_map = {};

        //设置label
        data_map.label = key;

        /**
         * 设置children分为两种
         */
        if (typeof obj[key] === 'object') {
            let object2 = obj[key];
            let list2 = [];
            Object.keys(object2).forEach(function (key2) {
                let data_map2 = {};
                data_map2.label = key2;
                data_map2.children = [{label: object2[key2]}];
                list2.push(data_map2)
            });
            //设置children
            data_map.children = list2;
        } else {
            //设置children
            data_map.children = [{label: obj[key]}];
        }


        // 组装
        data_list.push(data_map)
    });
    return data_list;
}

let result = convert(obj);

console.log(result);
