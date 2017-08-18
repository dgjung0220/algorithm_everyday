#include "queue.h"
#include <stdio.h>
#include <malloc.h>

void initQueue(Queue *qPtr, int qSize) {
    qPtr->qSize = qSize;
    qPtr->queue = (int*)calloc(qSize, sizeof(int));
    qPtr->front = 0;
    qPtr->rear = 0;
}

int put(Queue *qPtr, int inData) {
    if((qPtr->rear+1)%(qPtr->qSize) == qPtr->front) {
        return 0;
    } else {
        qPtr->queue[qPtr->rear] = inData;
        qPtr->rear = (qPtr->rear+1) % (qPtr->qSize);
        return 1;
    }
}

int get(Queue *qPtr, int *getData) {
    if(qPtr->top == qPtr->rear) {
        return 0;
    } else {
        *getData = qPtr->queue[qPtr->front];
        qPtr->queue[qPtr->front] = 0;

        qPtr->front = (qPtr->front+1)%(qPtr->qSize);
        return 1;
    }
}

void printQueue(const Queue *qPtr)
{
    int i;
    for(i=qPtr->front; i != qPtr->rear; i=(i+1)%(qPtr->qSize)) {
		printf(" %d \n",*(qPtr->queue+i));
	}
}

void destroyQueue(Queue *qPtr)
{
	free(qPtr->queue);
	qPtr->qSize = NULL;
	qPtr->qSize = 0;
	qPtr->front = 0;
	qPtr->rear = 0;
}
