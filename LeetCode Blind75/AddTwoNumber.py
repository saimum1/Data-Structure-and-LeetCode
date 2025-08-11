
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def addTwoNumbers(self, l1, l2):
        
        rev1=self.reverse(l1)
        sum1=self.sumList(rev1)
        rev2=self.reverse(l2)
        sum2=self.sumList(rev2)

        sum=sum1+sum2
        print("sum1 + sum2",sum1,"+",sum2,"=",sum)


    def reverse(self,head):
        prev,curr=None,head
        while curr:
            next=curr.next
            curr.next=prev
            prev=curr
            curr=next 

    def sumList(self,head):
        if(head==None):return 0
        return head.val + head.next     
sol=Solution()

def create_linked_list(lst):
    head = None
    for value in reversed(lst):
        head = ListNode(value, head)
    return head

l1 = create_linked_list([2, 4, 3])
l2 = create_linked_list([5, 6, 4])
sol.addTwoNumbers(l1,l2)    