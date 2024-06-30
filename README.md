# Explaining the meme
Internet is made of millions of memes flowing everyday, so, devs create a ton of new images showing how their code doesn't work, 
the server is down or even the programming language is broken or annoying. 🤔

This particular meme comes from Javascript enviroments inside web and application development.
> Javascript lack variable types, so casting, parsing and all that stuff is pretty tough

So someone discovered that using the default **parseInt();** function with a number **0.0000005 returns the 5 as result instead of 0.**

![imagen](https://user-images.githubusercontent.com/43274508/152199491-4ba0e219-22e4-44a5-9aac-795afa0e0fa9.png)


## Ok, but how is that even possible? 💭
To solve this mistery I make two scripts in **javascript** and **python** that share the same logic.

> Python uses int() to parse so I use it here. But I realized that the function is protected 
> against using a float as an input, showing the following error. 

![imagen](https://user-images.githubusercontent.com/43274508/152200666-28566093-d29f-4c1e-9636-b56e27fb42ac.png)

Ok so, thats it, javascript is broken 🔥💔 


## Maybe this is not that simple.
Okay so python is protected. But I solve this issue using **float()** function and now is running: 

> Code:

![imagen](https://user-images.githubusercontent.com/43274508/152201198-c400847e-411c-4622-bef1-99594623530b.png)

> Output: 

![imagen](https://user-images.githubusercontent.com/43274508/152201249-b033c85f-9201-4a7c-a26d-716bf879b882.png)

The output is showing, but using **scientific notation**



## Getting closer to the solution 💡

SO! python is using another notation when parsing number is  small enought. **Let's try parsing with parseFloat() in javascript instead.**

![imagen](https://user-images.githubusercontent.com/43274508/152201971-fa738c0c-2ad8-43da-9d36-07fe2d00e674.png)

> Excellent! The number is shown in the correct way now. BUT IN **SCIENTIFIC NOTATION**

![imagen](https://user-images.githubusercontent.com/43274508/152202136-cc27d86c-23c6-49d6-8e8c-ff229cc39a14.png)



## Okay but what's Javascript doing inside the getInt() function? 💻 

> That's the funny part, it seems that **javascript is using the parseFloat()** function that 
> returns **5e-7** and then getting the first numbers before the 'ilegal characters' 

We can see this behaivour here with the following snipet:

> Code: 

![imagen](https://user-images.githubusercontent.com/43274508/152203517-e1fcbef1-bfe2-4afe-bc31-a8e16c183cd9.png)

> Output: 

![imagen](https://user-images.githubusercontent.com/43274508/152203608-ac3463e3-77ac-438f-a769-0f7950017658.png)



## The conclusion 💬

> Using javascript parseInt() to parse a float inside a String is extremelly incorrect. 
> You MUST be using parseFloat() and then trunc the number if you want.

![imagen](https://user-images.githubusercontent.com/43274508/152204408-7f3d0e18-9de8-4c58-af7a-81e51a642030.png)
![imagen](https://user-images.githubusercontent.com/43274508/152204436-657b24df-6d5b-4581-a588-86d9b95d9f64.png)

> So using the right tools to do the right things, that's the key.

How amazing is that? 

I hope you enjoy this experiment!🧪
- Akrck02
