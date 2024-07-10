export const color=[
    "white",
    "Black",
    "red",
    "marun",
    "Being",
    "Pink",
    "Green",
    "Yellow",
];

export const filters =[
    {
        id: "color",
        name:"Color",
        options: [
            {value:"white", label:"pink"},
            {value:"beige", label:"Beige"},
            {value:"blue", label:"Blue"},
            {value:"brown", label:"Brown"},
            {value:"green", label:"Green"},
            {value:"purple", label:"Purple"},
            {value:"yellow", label:"Yellow"},
            
        ]
    },
    {
        id:"size",
        name:"Size",
        options:[
            {value:"S",label:"S"},
            {value:"M",label:"M"},
            {value:"L",label:"L"},

        ]
    }
]

export const singleFilter=[
    {
        id:"price",
        name:"Price",
        options:[
            {value:"159-399",label:"159rs To 399rs"},
            {value:"159-399",label:"159rs To 399rs"},
            {value:"159-399",label:"159rs To 399rs"},
            {value:"159-399",label:"159rs To 399rs"},
            {value:"159-399",label:"159rs To 399rs"}
        ]
    },
    {
        id:"discount",
        name:"Discount Range",
        options:[
            { value: "10",label: "10% And Above" },
            { value: "20",label: "20% And Above" },
            { value: "30",label: "30% And Above" },
            { value: "40",label: "40% And Above" },
            { value: "50",label: "50% And Above" },

        ]
    },
    {
        id:"availability",
        name:"Availability",
        options:[
            { value: "yes",label: "Available" },
            { value: "no",label: "Not Available" },
           
        ]
    }
]