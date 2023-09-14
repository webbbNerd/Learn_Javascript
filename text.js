function hello(arr, n){
    var i;
    for(i=0;i<n;i++){
        var j;
        for(j=i+1; j<n;j++){
            if(arr[i]>arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

const arr = [4,1,3,9,7]
hello(arr,5)

