const org1_depts = [
    {
        name: 'accounting',
        children: [
            { name: 'accounting payable', children: [] },
            { name: 'accounting receivable', children: [] },
        ],
    },
    {
        name: 'finance',
        children: [],
    },
]
const org2_depts = [
    {
        name: 'accounting',
        children: [
            { name: 'accounting payable', children: [] },
            {
                name: 'accounting receivable',
                children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
            },
        ],
    },
    {
        name: 'finance',
        children: [{ name: 'investment', children: [] }],
    },
]

const org1 = document.getElementById("org1");
const org2 = document.getElementById("org2");
printDepts(org1_depts, 1);
printDepts(org2_depts, 2);

function printDepts(depts, org) {
    let list = "<ul>";
    for (let i = 0; i < depts.length; i++) {
        list = list + "<li>" + depts[i].name;
        if (depts[i].children.length) {
            list = list + printDepts(depts[i].children);
        }
        list = list + "</li>";
    }
    if (org === 1)
        org1.innerHTML = list;
    if (org === 2)
        org2.innerHTML = list;
    return list + "</ul>";}
