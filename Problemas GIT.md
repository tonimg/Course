                                                                                  
C:\Users\tonim\OneDrive\Documentos\SkyLab Coders\Course (master)                  
λ git log                                                                         
commit                                     
Author: Toni <tonimarchante@gmail.com>                                            
Date:   Thu May 11 17:17:53 2017 +0200                                            
                                                                                  
    change structure folders                                                      
                                                                                  
commit 5afbdccd6ef01008ac1a608196e8e2bc6f257655                                   
Author: Toni <tonimarchante@gmail.com>                                            
Date:   Mon Apr 24 17:22:03 2017 +0200                                            
                                                                                  
    Update readme                                                                 
                                                                                  
commit 8ca94eeeb8f5ed9b8278a14d8fc53379a2ceb45a                                   
Author: Toni <tonimarchante@gmail.com>                                            
Date:   Mon Apr 24 14:02:30 2017 +0200                                            
                                                                                  
    Update readme                                                                 
                                                                                  
commit 137e9be39b10b1394200f7ff535b57f9f069a62e                                   
Author: Toni <tonimarchante@gmail.com>                                            
Date:   Mon Apr 24 10:23:00 2017 +0200                                            
                                                                                  
    Update readme                                                                 
                                                                                  
commit 1480d926ebc125e481033ec7e6e5239de0947482                                   
                                                                                  
C:\Users\tonim\OneDrive\Documentos\SkyLab Coders\Course (master)                  
λ git reset                                                                       
                                                                                  
C:\Users\tonim\OneDrive\Documentos\SkyLab Coders\Course (master)                  
λ git status                                                                      
On branch master                                                                  
Your branch and 'origin/master' have diverged,                                    
and have 1 and 3 different commits each, respectively.                            
  (use "git pull" to merge the remote branch into yours)                          
nothing to commit, working tree clean                                             
                                                                                  
C:\Users\tonim\OneDrive\Documentos\SkyLab Coders\Course (master)                  
λ git bisect                                                                      
usage: git bisect [help|start|bad|good|new|old|terms|skip|next|reset|visualize|rep
lay|log|run]                                                                      
                                                                                  
C:\Users\tonim\OneDrive\Documentos\SkyLab Coders\Course (master)                  
λ git grep                                                                        
fatal: no pattern given.                                                          
                                                                                  
C:\Users\tonim\OneDrive\Documentos\SkyLab Coders\Course (master)                  
λ git show                                                                        
commit 24135d477b6b989abf09cd1768edd4e9353fbf86                                   
Author: Toni <tonimarchante@gmail.com>                                            
Date:   Thu May 11 17:17:53 2017 +0200                                            
                                                                                  
    change structure folders                                                      
                                                                                  
diff --git a/.gitignore b/.gitignore                                              
new file mode 100644                                                              
index 0000000..d9faa09                                                            
--- /dev/null                                                                     
+++ b/.gitignore                                                                  
@@ -0,0 +1,2 @@                                                                   
+Projects                                                                         
+_.git - copia                                                                    
diff --git a/02 Semana/Bootstrap Site Exercise/02-portfolio/material/img.zip b/02 
Semana/Bootstrap Site Exercise/02-portfolio/material/img.zip                      
deleted file mode 100644                                                          
index 8ce7dd2..0000000                                                            
Binary files a/02 Semana/Bootstrap Site Exercise/02-portfolio/material/img.zip and
 /dev/null differ                                                                 
diff --git a/03 Semana/Readme 24.04.md b/03 Semana/Readme 24.04.md                
deleted file mode 100644                                                          
index 52ebbec..0000000                                                            
--- a/03 Semana/Readme 24.04.md                                                   
+++ /dev/null                                                                     
                                                                                  
C:\Users\tonim\OneDrive\Documentos\SkyLab Coders\Course (master)                  
λ git checkout                                                                    
Your branch and 'origin/master' have diverged,                                    
and have 1 and 3 different commits each, respectively.                            
  (use "git pull" to merge the remote branch into yours)                          
                                                                                  
C:\Users\tonim\OneDrive\Documentos\SkyLab Coders\Course (master)                  
λ git fetch origin                                                                
Auto packing the repository in background for optimum performance.                
See "git help gc" for manual housekeeping.                                        
Counting objects: 2906, done.                                                     
Delta compression using up to 8 threads.                                          
Compressing objects: 100% (2810/2810), done.                                      
Writing objects: 100% (2906/2906), done.                                          
Total 2906 (delta 556), reused 0 (delta 0)                                        
Removing duplicate objects: 100% (256/256), done.                                 
Checking connectivity: 10305, done.                                               
warning: There are too many unreachable loose objects; run 'git prune' to remove t
hem.                                                                              
                                                                                  
C:\Users\tonim\OneDrive\Documentos\SkyLab Coders\Course (master)                  
λ git reset --hard origin/master                                                  
warning: unable to rmdir Frontend/03 Semana/Angular Demo App: Directory not empty 
Checking out files: 100% (2707/2707), done.                                       
HEAD is now at 96f1c10 exercise portafolio update                                 
                                                                                  
C:\Users\tonim\OneDrive\Documentos\SkyLab Coders\Course (master)                  
λ git status                                                                      
On branch master                                                                  
Your branch is up-to-date with 'origin/master'.                                   
Untracked files:                                                                  
  (use "git add <file>..." to include in what will be committed)                  
                                                                                  
        Backend/                                                                  
        Frontend/                                                                 
        Projects/                                                                 
        _.git - copia/                                                            
                                                                                  
nothing added to commit but untracked files present (use "git add" to track)      
                                                                                  
C:\Users\tonim\OneDrive\Documentos\SkyLab Coders\Course (master)                  
λ git log                                                                         
commit 96f1c1061c61b577bde297a37077735506109e9c                                   
Author: Toni <tonimarchante@gmail.com>                                            
Date:   Tue Apr 25 18:38:46 2017 +0200                                            
                                                                                  
    exercise portafolio update                                                    
                                                                                  
commit f1562c07059f7acbd148a51fe7a2668c14cc2f51                                   
Author: Toni <tonimarchante@gmail.com>                                            
Date:   Tue Apr 25 18:37:58 2017 +0200                                            
                                                                                  
    Update readme                                                                 
                                                                                  
commit 77326d1f4e6370ab5667071b9ffb5aff3f5c0a3a                                   
Author: Toni <tonimarchante@gmail.com>                                            
Date:   Mon Apr 24 17:24:40 2017 +0200                                            
                                                                                  
    Update readme                                                                 
                                                                                  
commit 5afbdccd6ef01008ac1a608196e8e2bc6f257655                                   
Author: Toni <tonimarchante@gmail.com>                                            
Date:   Mon Apr 24 17:22:03 2017 +0200                                            
                                                                                  
    Update readme                                                                 
                                                                                  
commit 8ca94eeeb8f5ed9b8278a14d8fc53379a2ceb45a                                   
                                                                                  
C:\Users\tonim\OneDrive\Documentos\SkyLab Coders\Course (master)                  
λ git loggit fetch origin git loggit fetch origin                                 
git: 'loggit' is not a git command. See 'git --help'.                             
                                                                                  
C:\Users\tonim\OneDrive\Documentos\SkyLab Coders\Course (master)                  
λ git update-ref refs/remotes/origin/master refs/remotes/origin/master@{1}        
                                                                                  
C:\Users\tonim\OneDrive\Documentos\SkyLab Coders\Course (master)                  
λ git stats                                                                       
git: 'stats' is not a git command. See 'git --help'.                              
                                                                                  
Did you mean this?                                                                
        status                                                                    
                                                                                  
C:\Users\tonim\OneDrive\Documentos\SkyLab Coders\Course (master)                  
λ git status                                                                      
On branch master                                                                  
Your branch is ahead of 'origin/master' by 1 commit.                              
  (use "git push" to publish your local commits)                                  
Changes not staged for commit:                                                    
  (use "git add <file>..." to update what will be committed)                      
  (use "git checkout -- <file>..." to discard changes in working directory)       
                                                                                  
        modified:   Tips/tips.md                                                  
                                                                                  
Untracked files:                                                                  
  (use "git add <file>..." to include in what will be committed)                  
                                                                                  
        Backend/                                                                  
        Frontend/                                                                 
        Projects/                                                                 
        _.git - copia/                                                            
                                                                                  
no changes added to commit (use "git add" and/or "git commit -a")                 
                                                                                  
C:\Users\tonim\OneDrive\Documentos\SkyLab Coders\Course (master)                  
λ git log                                                                         
commit 96f1c1061c61b577bde297a37077735506109e9c                                   
Author: Toni <tonimarchante@gmail.com>                                            
Date:   Tue Apr 25 18:38:46 2017 +0200                                            
                                                                                  
    exercise portafolio update                                                    
                                                                                  
commit f1562c07059f7acbd148a51fe7a2668c14cc2f51                                   
Author: Toni <tonimarchante@gmail.com>                                            
Date:   Tue Apr 25 18:37:58 2017 +0200                                            
                                                                                  
    Update readme                                                                 
                                                                                  
commit 77326d1f4e6370ab5667071b9ffb5aff3f5c0a3a                                   
Author: Toni <tonimarchante@gmail.com>                                            
Date:   Mon Apr 24 17:24:40 2017 +0200                                            
                                                                                  
    Update readme                                                                 
                                                                                  
commit 5afbdccd6ef01008ac1a608196e8e2bc6f257655                                   
Author: Toni <tonimarchante@gmail.com>                                            
Date:   Mon Apr 24 17:22:03 2017 +0200                                            
                                                                                  
    Update readme                                                                 
                                                                                  
commit 8ca94eeeb8f5ed9b8278a14d8fc53379a2ceb45a                                   
Author: Toni <tonimarchante@gmail.com>                                            
                                                                                  
C:\Users\tonim\OneDrive\Documentos\SkyLab Coders\Course (master)                  
λ git chekout 8ca94eeeb8f5ed9b8278a14d8fc53379a2ceb45a                            
git: 'chekout' is not a git command. See 'git --help'.                            
                                                                                  
Did you mean this?                                                                
        checkout                                                                  
                                                                                  
C:\Users\tonim\OneDrive\Documentos\SkyLab Coders\Course (master)                  
λ git checkout 8ca94eeeb8f5ed9b8278a14d8fc53379a2ceb45a                           
M       Tips/tips.md                                                              
Note: checking out '8ca94eeeb8f5ed9b8278a14d8fc53379a2ceb45a'.                    
                                                                                  
You are in 'detached HEAD' state. You can look around, make experimental          
changes and commit them, and you can discard any commits you make in this         
state without impacting any branches by performing another checkout.              
                                                                                  
If you want to create a new branch to retain commits you create, you may          
do so (now or later) by using -b with the checkout command again. Example:        
                                                                                  
  git checkout -b <new-branch-name>                                               
                                                                                  
HEAD is now at 8ca94ee... Update readme                                           
                                                                                  
C:\Users\tonim\OneDrive\Documentos\SkyLab Coders\Course (HEAD detached at 8ca94ee)
                                                                                  
λ                                                                                 
