let names = new Array();

names[0]="Amir";
names[1]="Jamil";
names[2]="Nadim";
names[3]="Jubayer";
names[4]="Kader";
names[5]="Rayhan";
names[6]="Tanvir";
names[7]="fariha";
names[8]="Jitul";
names[9]="jahanara";

for( i=0; i<names.length; i++){
    if(names[i].charAt(0)=='j'|| names[i].charAt(0)=='J'){
        console.log("GoodBye"+" "+names[i]);
    }
    else{
        console.log("Hello"+" "+names[i]);
    }
    
}