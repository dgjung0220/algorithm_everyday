typedef struct _queue {
    int *queue;
    int sSize;
    int front, rear;
}

void initQueue(Queue *qPtr, int qSize);
int put(Queue *qPtr, int inData);
    