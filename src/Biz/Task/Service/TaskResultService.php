<?php


namespace Biz\Task\Service;


interface TaskResultService
{
    public function createTaskResult($taskResult);

    public function updateTaskResult($id, $taskResult);

    public function waveLearnTime($id, $time);

    public function findUserTaskResultsByCourseId($courseId);

    public function countTaskResult($conditions);

    public function getUserTaskResultByTaskId($courseTaskId);

    public function findUserProgressingTaskResultByActivityId($activityId);
}