# transmold
This project is aiming to generate pseudo sql segments, or at least to provide reference for your backend apis to generate sql instead.
<br>

Why this is written in JS/ES6? Because this tool's specialty to help create frontend UI components that let people of no sql background determine the query they need.
<br>

This tool is also more than sql. It can be used to generate segments and statements of other languages as long as you define the templates accordingly. Examples are provided in the end.
<br>

此项目致力于sql的伪代码生成, 或者至少提供一些依据给到后端的接口来生成这些代码.
<br>

为什么这个工具是用js/es6书写的呢? 因为其主要的领域是在前端, 帮助渲染界面上的UI组件, 使得没有sql语言基础的应用使用者能够在界面上制定他们想要的查询.
<br>

这个工具也不仅仅只能用于sql的生成, 如果你定义模板得到, 他也可以用于生成其他的语言片段. 例子将在结尾给到.

<br>


UI demo / UI组件演示 
----
The link below is a very basic UI component rendered based on ``transmold``.
<br>
However the component is not provided in ``transmold`` itself.
<br>
>https://gabrielni729.github.io/transmold-demo/#/demo-en

<br>

下方的链接是一个UI组件的简单例子, 组件的渲染基于``transmold`` . 
<br>
请注意本工具本身并不提供UI组件.
<br>
>https://gabrielni729.github.io/transmold-demo/#/demo-cn

<br>

Install / 安装
----
``npm install transmold``
<br>
<br>

Initialize / 初始化
----
English users may skip this part
```
import { Operators, i18n } from 'transmold';   

i18n.switchTo('cn');                      // 目前可省略 
Operators.activateContext('mysql-cn');    // 使用mysql中文模板
```
<br>

Import metadata / 元数据接入
----
Before we start, there are some explanations to make about the terms used below (mostly because I'm not a native English speaker, so some of the terms I used here may not very much sense):
<br>
*category* : meaning this field's value distribution is discrete. For example, gender is a category as well as people's nationality. Such fields better work with enums.
<br>
*metrics* : meaning this field's value distribution is continuous. Age and students' score in school are both metrics.
<br>
<br>
Let's say we now have some metadata - three tables and each has some fields under it, and some fields are enumerable, you can import like this:
<br>
(Please notice that these metadata would have been registered to global when instantiated. This may not be a good practice, but I will leave it for now.)

```
import { Table, Field, Enum } from 'transmold';

let allData = [
    new Table({
        name: 'USER_INFO',
        label: 'users\' basic info'
    }).addFields([
        new Field({
            name: 'USER_ID',
            label: 'user id',
            dataType: 'string'
        }),
        new Field({
            name: 'USER_NAME',
            label: 'user name',
            dataType: 'string'
        }),
        new Field({
            name: 'AGE',
            label: 'age',
            dataType: 'number',
            distributeType: 'metrics',
            unit: 'year'
        }),
        new Field({
            name: 'GENDER',
            label: 'gender',
            dataType: 'number',
            distributeType: 'category',
        }).addEnums([
            new Enum({
                code: 0,
                label: 'male'
            }),
            new Enum({
                code: 1,
                label: 'female'
            })
        ])
    ]),

    new Table({
        name: 'COMMODITY_INFO',
        label: 'commodities\' info'
    }).addFields([
        new Field({
            name: 'COMMODITY_ID',
            label: 'commodity id',
            dataType: 'string'
        }),
        new Field({
            name: 'COMMODITY_NAME',
            label: 'commodity name',
            dataType: 'string'
        }),
        new Field({
            name: 'UNIT_PRICE',
            label: 'unit price',
            dataType: 'number',
            distributeType: 'metrics',
            unit: 'USD'
        }),
    ]),

    new Table({
        name: 'COMMODITY_PURCHASE_LOG',
        label: 'commodities\' transaction'
    }).addFields([
        new Field({
            name: 'COMMODITY_ID',
            label: 'commodity id (disabled)',
            dataType: 'string'
        }),
        new Field({
            name: 'USER_ID',
            label: 'user id (disabled)',
            dataType: 'string'
        }),
        new Field({
            name: 'QUANTITY',
            label: 'quantity',
            dataType: 'number',
            distributeType: 'metrics',
            unit: 'unit'
        }),
        new Field({
            name: 'DISCOUNT',
            label: 'discount',
            dataType: 'string',
            distributeType: 'category',
        }).addEnums([
            new Enum({
                code: 'none',
                label: 'no discount'
            }),
            new Enum({
                code: '0.8-all',
                label: '20% off for total'
            }),
            new Enum({
                code: '0.5-sec',
                label: '50% off for the second'
            }),
            new Enum({
                code: 'free',
                label: 'free'
            })
        ])
    ])
];
```
<br>
<br>
<br>

先简单讲一些定义:
<br>
*category* : 维度
<br>
*metrics* : 度量


假设现在我们有一些元数据 - 三张表, 每张表都有自己的字段, 其中一些字段是可枚举的(即维度), 那么你可以使用如下方式接入:
<br>
(请注意当这些数据对象实例化时, 就已经注册到元数据全局了, 这可能不是好的实现方式, 但目前先这样)
```
import { Table, Field, Enum } from 'transmold';

let allData = [
    new Table({
        name: 'USER_INFO_DIM',
        label: '用户信息维表'
    }).addFields([
        new Field({
            name: 'USER_ID',
            label: '用户ID',
            dataType: 'string'
        }),
        new Field({
            name: 'USER_NAME',
            label: '用户名称',
            dataType: 'string'
        }),
        new Field({
            name: 'AGE',
            label: '年龄',
            dataType: 'number',
            distributeType: 'metrics',
            unit: '岁'
        }),
        new Field({
            name: 'GENDER',
            label: '性别',
            dataType: 'number',
            distributeType: 'category',
        }).addEnums([
            new Enum({
                code: 0,
                label: '男'
            }),
            new Enum({
                code: 1,
                label: '女'
            })
        ])
    ]),

    new Table({
        name: 'COMMODITY_INFO_DIM',
        label: '商品信息维表'
    }).addFields([
        new Field({
            name: 'COMMODITY_ID',
            label: '商品ID',
            dataType: 'string'
        }),
        new Field({
            name: 'COMMODITY_NAME',
            label: '商品名称',
            dataType: 'string'
        }),
        new Field({
            name: 'UNIT_PRICE',
            label: '单价',
            dataType: 'number',
            distributeType: 'metrics',
            unit: '元'
        }),
    ]),

    new Table({
        name: 'COMMODITY_PURCHASE_LOG',
        label: '商品购买记录表'
    }).addFields([
        new Field({
            name: 'COMMODITY_ID',
            label: '商品ID(禁用)',
            dataType: 'string'
        }),
        new Field({
            name: 'USER_ID',
            label: '用户ID(禁用)',
            dataType: 'string'
        }),
        new Field({
            name: 'QUANTITY',
            label: '交易数量',
            dataType: 'number',
            distributeType: 'metrics',
            unit: '个'
        }),
        new Field({
            name: 'DISCOUNT',
            label: '折扣',
            dataType: 'string',
            distributeType: 'category',
        }).addEnums([
            new Enum({
                code: 'none',
                label: '无折扣'
            }),
            new Enum({
                code: '0.8-all',
                label: '总价8折'
            }),
            new Enum({
                code: '0.5-sec',
                label: '第2个半价'
            }),
            new Enum({
                code: 'free',
                label: '白给'
            })
        ])
    ])
];
```
<br>
<br>

Access metadata / 访问元数据 
----
You can use the ``allData`` defined in the last step to access table, and use api like ``table.getFields() / allData[0].getFields()`` to access fields, and likewise, use api like ``field.getEnums() / allData[2].getFields()[3].getEnums()`` to access enumerate items under fields.
<br>
Also you can use api ``DATUM`` to locate directly:
<br>
```
import { Table, Field, Enum, DATUM } from 'transmold';

console.log(DATUM('USER_INFO'));               // DATUM(tableName) to access table
console.log(DATUM('USER_INFO', 'USER_ID'));    // DATUM(tableName, fieldName) to access field
console.log(DATUM('USER_INFO', 'GENDER', 0));  // DATUM(tableName, fieldName, enumCode) to access enum

```
<br>
<br>

你可以使用上一步定义的``alldata``来访问表, 并使用api如``table.getFields() / allData[0].getFields()``访问字段, 以及``field.getEnums() / allData[2].getFields()[3].getEnums()``来访问枚举项.
<br>
或者你可以使用api ``DATUM``来直接访问:
<br>
```
import { Table, Field, Enum, DATUM } from 'transmold';

console.log(DATUM('USER_INFO_DIM'));               // DATUM(tableName) 访问表
console.log(DATUM('USER_INFO_DIM', 'USER_ID'));    // DATUM(tableName, fieldName) 访问字段
console.log(DATUM('USER_INFO_DIM', 'GENDER', 1));  // DATUM(tableName, fieldName, enumCode) 访问枚举项

```

<br>
<br>

Access operator / 访问操作符
----
List operators:
```
import { Operators } from 'transmold';

let list = Operators.opsList();                      // access all
let listByResult = Operators.opsByResult('number');  // access by result data type
```

Directly access a single operator by it's alias:
```
import { OP } from 'transmold';

let opPlus = OP('+');
let opConcat = OP('concat');
```
Get operators responsive to a subject that can be a normal value, a field, a enum or a instance (will explain later):
```
let opsForNumberValue = (1).resops();
let opsForStringValue = 'a'.resops();
let opsForStringField = new Field({name: 'USER_ID', label: 'user id', dataType: 'string'}).resops();
```
<br>

列出操作符
```
import { Operators } from 'transmold';

let list = Operators.opsList();                      // 获取所有
let listByResult = Operators.opsByResult('number');  // 按结果类型获取
```
按假名alias直接获取单个操作符
```
import { Operators, OP } from 'transmold';

Operators.activateContext('mysql-cn');       // 切换mysql中文模板环境
let opPlus = OP('+');
let opConcat = OP('拼接');
```
按某个主语, 获取可以响应其数据类型的操作符, 主语可是是一个值, 一个字段, 一个枚举项, 或者一个表达式实例(稍后介绍):
```
import { Operators, OP, Field } from 'transmold';

let opsForNumberValue = (1).resops();
let opsForStringValue = 'a'.resops();
let opsForStringField = new Field({name: 'USER_ID', label: '用户ID', dataType: 'string'}).resops();
```


<br>
<br>

Assemble an instance / 组装表达式
----
To assemble an instance, you will need an operator first, and then the parameters this operator requires. The number of parameters may differ.
A parameter accepts a normal value, a field, an enumerable item, or another instance.
<br>
Also, if you don't know the template of an operator, or what $1, $2, etc. stand for, please ``console.log`` the operator.
<br>
Below are some basic examples:
```
import { Instance, Field, OP } from 'transmold';

let inst_1 = new Instance({template: OP('>')});           // instantiate an instance using operator '>', template is '$1>$2'
inst_1.setValue('$1', 2);                                 // set $1 with a normal value 2
inst_1.setValue('$2', 80);                               
console.log(inst_1.outputText(), inst_1.isLegitimate());  // 2>80 true, legal grammatically

let inst_2 = new Instance({template: OP('+')});
inst_2.setValue('$1', 3);
inst_2.setValue('$2', 4);
inst_1.setValue('$2', inst_2);                            // set inst_1's $1 with inst_2
console.log(inst_1.outputText(), inst_1.isLegitimate());  // 2>(3+4) true, legal grammatically

inst_1.setValue('$2', 'w');
console.log(inst_1.outputText(), inst_1.isLegitimate());  // 2>w false, illegal becase $2 expects a number

inst_1.setValue('$2', new Field({name: 'AGE', label: 'age', dataType: 'number'}));
console.log(inst_1.outputText(), inst_1.isLegitimate());  // 2>null.AGE true, legal because age is a number
                                                          // 'null.' is due to the undefined table for the field
                                                          // please don't mind for now
```

<br>
<br>

组装一个表达式, 你首先需要一个操作符, 然后是这个操作符所要求的参数. 每个操作符要求的参数个数不一定相同.
参数位可以接受普通值, 字段, 枚举项, 或者是另一个表达式.
<br>
如果你不知道某个操作符对应模板, 或者不了解参数位$1, $2等该怎么填的话, 请打印出这个操作符的对象进行查看.
<br>
下面是一些例子:
```
import { Instance, OP, Field } from 'transmold';        

let inst_1 = new Instance({template: OP('>')});              // 用'>'操作符实例一个表达式, 其模板为'$1>$2'
inst_1.setValue('$1', 2);                                    // 将$1设为普通值2
inst_1.setValue('$2', 80);
console.log(inst_1.outputText(), inst_1.isLegitimate());     // 输出组装结果, 检查是否合理, 2>80 true, 数据类型上正确

let inst_2 = new Instance({template: OP('+')});
inst_2.setValue('$1', 3);
inst_2.setValue('$2', 4);
inst_1.setValue('$2', inst_2);                               // 将表达式inst_1的$1位设为表达式inst_2
console.log(inst_1.outputText(), inst_1.isLegitimate());     // 2>(3+4) true, 数据类型上正确

inst_1.setValue('$2', 'w');
console.log(inst_1.outputText(), inst_1.isLegitimate());     // 2>w false, 不正确, $2需要给的是数字 

inst_1.setValue('$2', new Field({name: 'AGE', label: '年龄', dataType: 'number'}));
console.log(inst_1.outputText(), inst_1.isLegitimate());     // 2>null.AGE true, 正确因为年龄是个数字
                                                             // 'null.' 是因为字段的表没有给定义, 请暂时先忽略
                                                   
```

<br>
<br>

Customize operators / 自定义操作符
----
Like the built-in mysql and mysql-cn operators, you can also customize your own operators, which can either be oracle or other sqls, or even other programming languages.
<br>
Please know first that there is a concept called operators' *context* that is mysql by default. If you'd like to create operators of another language, simply define them first under a new context and then switch to it.
```
import { Template, Parameter, OP, Operators } from 'transmold';

new Template({
    name: 'cubic',
    context: 'mysql',
    templateDisplay: 'cubic($1)',
    templateCode: '$1*$1*$1',
    resultDataType: 'number',
    params: {
        $1: new Parameter({
            dataType: 'number'
        })
    }}).as('cubic');                // alias
    
console.log(OP('cubic'));           // access by alias

new Template({
    name: 'equals',
    context: 'java',                // define under context java
    templateDisplay: '$1=$2',
    templateCode: '$1 != null && $1.equals($2)',
    resultDataType: 'boolean',
    params: {
        $1: new Parameter({dataType: 'string'}),
        $2: new Parameter({dataType: 'string'})
    }}).as('=');

Operators.activateContext('java');   // switch context
console.log(OP('='));
```

<br>

和内置提供的mysql以及mysql-cn操作符一样, 你也可以自定义操作符, 这些操作符可以是oracle或其他sql, 甚至是其他编程语言.
<br>
请注意此处又一个概念叫做*context*, 默认是mysql. 如果你想创建其他语言的操作符模板, 需要将他们声明为一个新的context并切换至它.
```
import { Template, Parameter, OP, Operators } from 'transmold';

new Template({
    name: '立方',
    context: 'mysql',
    templateDisplay: '立方($1)',
    templateCode: '$1*$1*$1',
    resultDataType: 'number',
    params: {
        $1: new Parameter({
            dataType: 'number'
        })
    }}).as('立方');                          // 定义假名

console.log(OP('立方'));                     // 使用假名访问

new Template({
    name: 'equals',
    context: 'java',                         // 定义在java下
    templateDisplay: '$1=$2',
    templateCode: '$1 != null && $1.equals($2)',
    resultDataType: 'boolean',
    params: {
        $1: new Parameter({dataType: 'string'}),
        $2: new Parameter({dataType: 'string'})
    }}).as('=');

Operators.activateContext('java');           // 切换至java
console.log(OP('='));
```