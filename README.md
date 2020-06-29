# project-management-tool
Node.js API server which utilities Express framework, Sequelize, and PostgreSQL database.

Data model entities:
User (email, name, surname) 
Project (name, body: text, status - active, inactive, declined, completed)
Task (name, description: text, score: integer, status - active, inactive, declined, completed)

Relations:
Each project ( Project) should have an assigner (User)
Each task ( Task) should have an assigner (User) and a project (Project) it belongs to - Users ( User) may be participants (assignees) of multiple projects (Project), and/or multiple tasks (Task)

API endpoints:
GET /API/users - responds with a list of users. One must be able to filter by name and surname. The response must contain the list itself and additional information required for client-side pagination.
GET /API/tasks - responds with a list of tasks. One must be able to filter by name, description, status array (boolean OR operation filter), name/surname of the assigner, name/surname/id of the assignee(s) and by score. Example: you must be able to fetch all tasks, the assignees of which are User1, User2, User3, with either ”inactive” or ”declined” status, with the score no less than 4. The response must contain the list itself and additional information required for client-side pagination.
GET /API/projects - responds with a list of users. One must be able to filter by name, description of the project, status array (boolean OR operation filter), name/surname of the assigner, name/surname/id of the assignee(s), and by the score of the tasks.
 Example: you must be able to fetch all projects, the assignees of which have ids: [1,2,3], with either ”inactive” or ”declined” status, where all tasks of the projects have the score no less than 4. The response must contain the list itself, additional information required for client-side pagination, and the average score of all completed tasks of the project.
POST /API/tasks - creates a task
POST /API/projects - creates a project
POST /API/users - creates a user

Assumptions:
1. Filtering can be done on any number of attributes as well as any combination of attributes.

Enhancements:
1. Filtering based on attributes across models (Project, Task, and User)
2. Project based filtering
