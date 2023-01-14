//   You're given an integer k representing a number of workers and an
//   array of positive integers representing durations of tasks that must be
//   completed by the workers. Specifically, each worker must complete two unique
//   tasks and can only work on one task at a time. The number of tasks will always
//   be equal to 2k such that each worker always has exactly two tasks
//   to complete. All tasks are independent of one another and can be completed in
//   any order. Workers will complete their assigned tasks in parallel, and the
//   time taken to complete all tasks will be equal to the time taken to complete
//   the longest pair of tasks (see the sample output for an explanation).

//   Write a function that returns the optimal assignment of tasks to each worker
//   such that the tasks are completed as fast as possible. Your function should
//   return a list of pairs, where each pair stores the indices of the tasks that
//   should be completed by one worker. The pairs should be in the following
//   format:[task1, task2], where the order of task1 and
//   task2 doesn't matter. Your function can return the pairs in any
//   order. If multiple optimal assignments exist, any correct answer will be
//   accepted.

//   Note: you'll always be given at least one worker (i.e., k will
//   always be greater than 0).

let k = 3;
let tasks = [1, 3, 5, 3, 1, 4];
// console.log(task.sort((a, b) => a - b));
//[1:false, 3:false, 5:true, 3:false, 1:false, 4:false]

//Output = [[0,2],[4,5],[1,3]]

//[min1, max1]
//[min2, max2]
//[min3, max3]

// function taskAssignment(k, tasks) {
//   let min, max;
//   let result = [];
//   min = tasks[0];
//   max = tasks[0];
//   for (let i = 0; i < task.length; i++) {
//     let indexMax;
//     if (tasks[i] < min) min = i;
//     if (tasks[i] > max) indexMax = i;

//     result.push([min, max]);
//   }
//   return result;
// }
// let i = 0;
// array = [];
// result = [];
// while (k > 0) {
//   let min = task[i];
//   let max = task[i];
// }

// [1, 1, 3, 3, 4, 5];

//Solution
function taskAssignment(tasks) {
  const formattedTasks = tasks.map((value, index) => ({ value, index }));
  console.log(Object.entries(formattedTasks));
  formattedTasks.sort((a, b) => a.value - b.value);

  const res = [];
  let start = 0;
  let end = formattedTasks.length - 1;
  while (start < end) {
    res.push([formattedTasks[start].index, formattedTasks[end].index]);
    start++;
    end--;
  }
  console.log(res);
  return res;
}

taskAssignment(tasks);
