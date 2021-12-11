

// staudetn data stacter assisnment 01

const student = [

   {
       id           :   1,
       name      :  'delouar',
       class        :   'five',
       location    : 'mirpur',
   },
   {
       id           :   2,
       name      :  'hasan',
       class        :   'five',
       location    : 'uttara',
   },
   {
       id           :   3,
       name      :  'robin',
       class        :   'five',
       location    : 'mirpur',
   },
    
   {
       id           :   4,
       name      :  'jisan',
       class        :   'five',
       location    : 'mohammmadpur',
   },
    
   {
       id           :   5,
       name      :  'jakir',
       class        :   'five',
       location    : 'mirpur',
   },
   {
       id           :   6,
       name      :  'anam',
       class        :   'five',
       location    : 'uttara',
   },
   {
       id           :   7,
       name      :  'najir',
       class        :   'five',
       location    : 'banani',
   },
   {
       id           :   8,
       name      :  'jubayer',
       class        :   'five',
       location    : 'uttara',
   },
   {
       id           :   9,
       name      :  'said',
       class        :   'five',
       location    : 'uttar',
   },
   {
       id           :   10,
       name      :  'baki billa',
       class        :   'five ',
       location    : 'mohammadpur',
   },
    
 
]

let  result = JSON.stringify(student);
console.log(result);



// -----------------------------------------------------
// family phone book assisnment 02

const phonebook = [

    {
        name            :   'masod mia',
        father           :   'baki billa',
        cell               :  '0182-252525',
        location        :  'mirpur'

    },
    {
        name            :   'anam mia',
        father           :   'morshed mia',
        cell               :  '0172-252585',
        location        :  'uttara'

    },
    {
        name            :   'kurshed mia',
        father           :   'jubayer',
        cell               :  '0182-502523',
        location        :  'mirpur'

    },
    {
        name            :   'forhad',
        father           :   'mirja fokrul',
        cell               :  '01992-25259',
        location        :  'mohamad pur'

    },
    {
        name            :   'jakir',
        father           :   'abu sofian',
        cell               :  '01992-25339',
        location        :  'kashem pur'

    },
    {
        name            :   'mohibur',
        father           :   'sabbir',
        cell               :  '01758965825',
        location        :  'uttara'

    },
    {
        name            :   'ali akbar',
        father           :   'ali amjad',
        cell               :  '01758952525',
        location        :  'mohammad pur'

    },
    {
        name            :   'nayon khan',
        father           :   'moynul islam',
        cell               :  '01585858524',
        location        :  'uttara'

    },
    {
        name            :   'abdur rahim',
        father           :   'kashem ali',
        cell               :  '01638402585',
        location        :  'narial'

    },
    {
        name            :   'obidur rahman',
        father           :   'mannab ali',
        cell               :  '0177258585',
        location        :  'mirpur'

    },

]

let cell = JSON.stringify(phonebook);

console.log(cell);


// -------------------------------------------
// developer objet file convert json assigment 03


const  devs = [

    {
        Id              :              01,
        name         :             'rakib molla',
        skil            :             'wordpress devs',
        age            :            19,
        location     :             'uttara',
        
    },
    {
        Id              :              02,
        name         :             'ahosan molla',
        skil            :             'mearnstick devs',
        age            :            20,
        location     :             'jamalpur',
        
    },
    {
        Id              :              03,
        name         :             'delouar hasan',
        skil            :             'javascript devs',
        age            :            22,
        location     :             'sylhet',
        
    },
    {
        Id              :              04,
        name         :             'said rana',
        skil            :             'php devs',
        age            :            25,
        location     :             'sonamganj',
        
    },
    {
        Id              :              05,
        name         :             'ovijit mokroder',
        skil            :             'phyton devs',
        age            :            35,
        location     :             'hobiganj',
        
    },
    {
        Id              :              06,
        name         :             'shawon',
        skil            :             ' learabel devs',
        age            :            25,
        location     :             'banani dahka',
        
    },
    {
        Id              :              07,
        name         :             'sabina akther',
        skil            :             'wordpress devs',
        age            :            19,
        location     :             'moulobi bazar',
        
    },
    {
        Id              :              08,
        name         :             'monika parben',
        skil            :             'php devs',
        age            :            25,
        location     :             'uttara dhaka',
        
    },
    {
        Id              :              09,
        name         :             'shehab hasan',
        skil            :             'javascript devs',
        age            :            15,
        location     :             'uttara dhaka',
        
    },
    {
        Id              :              10,
        name         :             'monika parben',
        skil            :             'php devs',
        age            :            20,
        location     :             'uttara dhaka',
        
    },

]


let convert = JSON.stringify(devs);

console.log(convert);




let data = '[{"id":1,"name":"delouar","class":"five","location":"mirpur"},{"id":2,"name":"hasan","class":"five","location":"uttara"},{"id":3,"name":"robin","class":"five","location":"mirpur"},{"id":4,"name":"jisan","class":"five","location":"mohammmadpur"},{"id":5,"name":"jakir","class":"five","location":"mirpur"},{"id":6,"name":"anam","class":"five","location":"uttara"},{"id":7,"name":"najir","class":"five","location":"banani"},{"id":8,"name":"jubayer","class":"five","location":"uttara"},{"id":9,"name":"said","class":"five","location":"uttar"},{"id":10,"name":"baki billa","class":"five ","location":"mohammadpur"}]';


let ob = JSON.parse(data);

console.log(ob);