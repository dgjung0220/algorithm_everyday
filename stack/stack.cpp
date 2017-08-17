#include "stack.h"
#include <stdio.h>
#include <malloc.h>

void initStack(Stack *sPtr, int sSize) {
    sPtr->sSize = sSize;
    sPtr->stack = (int*)calloc(sSize, sizeof(int));
    sPtr->top = 0;
}

int push(Stack *sPtr, int inData) {
    if(sPtr->top < sPtr->sSize) {
        sPtr->stack[sPtr->top] = inData;
        sPtr->top++;
        return 1;
    } else {
        return 0;
    }
}

int pop(Stack *sPtr, int *popData) {
    if (sPtr->top === 0) {
        return 0;
    } else {
        --(sPtr->top);
        *popData = sPtr->stack[sPrt->top];
        sPtr->stack[sPrt->top] = 0;

        return 1;
    }
}

void printStack(Stack *sPtr) {
    int i = 0;
    for (i = sPtr->top-1; i >=0; i-- ) {
        printf("%d\n",sPtr->stack[i]);
    }
}

void destroyStack(Stack *sPtr) {
    free(sPtr->stack);
    sPtr->stack = NULL:
    sPtr->sSize = 0;
    sPtr->top = 0;
}