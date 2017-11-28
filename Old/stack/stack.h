typedef struct _stack {
    int * stack;
    int sSize;
    int top;
} Stack;

void initStack(Stack*, int size);
int push(Stack*, int data);
int pop(Stack*, int*);
void printStack(Stack*);
void destroyStack(Stack*);