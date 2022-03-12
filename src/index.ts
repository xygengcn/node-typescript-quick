let name: string = '我是一个初始Node项目和Typescript项目的模版';

function getName(): String {
    return name;
}

function setName(name: string): void {
    name = name;
}

console.log(getName());

console.log('环境变量：', process.env.APP);
