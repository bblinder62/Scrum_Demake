# cs103a-cpa02
Ben Blinder's PA02 Assignment.

Link to App: https://cs103a-pa03.herokuapp.com/ 
Link to Repo: https://github.com/bblinder62/cs103a-cpa02
Link to Video: https://drive.google.com/file/d/13I4X4vk2Pa-hbgqwVM7XEmCbzFR8lmLq/view?usp=sharing

# CAUTION
After I recorded the video, I found a website breaking glitch, sometimes when you create a new Project it crashes, but it works locally so I have no idea what the problem is, and I cannot replicate it reliably.

Basically, my app was meant to be a smaller remade version of Scrum where multiple users can join a project and keep track of what needs to be done for the project. 
All you need to do is log in, and click the Join a project button, where you can then create or join a project. Currently, users need to set an ID that others can then enter in the Join section to join.
You can add items to the projects, but I did not have time to add in solving or deleting items.

I learned more about deployment (Which took forever for me this time around for some reason) but more importantly I attempted to add other models as a part of an overarching model. So the project object would hold a bunch of item objects. Sadly, I could never get that working despite working with it forever so I used a workaround with an extra "find" method.
If I had more time, I'd add deleting and solving items, make the whole thing look nice, make randomly generated project IDs and make it so no two projects can have the same ID. And also get Google OAuth working which I gave up on for this project very early on.

