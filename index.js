// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function getMax(arr,n){
    let mx = arr[0];
    for(let i=1;i<n;i++){
        mx=arr[i];
        return mx;
    }
}

function conSort(arr,n,exp){
    let output = new Array(n);
    let i;
    let count =new Array(10);
    for(let i=0;i<10;i++){
        count [i]=0;
        for( i=0;i<n;i++){
            count[Math.floor(arr[i]/exp)%10]++;

            for (i=1;1<10;i++){
                count[i]+=count[i-1]
            }

    }
//     store
        


}





}
