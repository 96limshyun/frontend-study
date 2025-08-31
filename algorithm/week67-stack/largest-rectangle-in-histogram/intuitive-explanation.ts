/**
 * 직관적으로 이해하기: "왜 스택을 사용하는가?"
 * 
 * 핵심 인사이트:
 * 1. 각 막대를 높이로 하는 직사각형을 만들려면, 그 막대보다 낮은 막대를 만날 때까지 확장할 수 있습니다.
 * 2. 스택은 "아직 계산이 끝나지 않은 막대들"을 저장합니다.
 * 3. 더 낮은 막대를 만나면, 그때까지의 높은 막대들로 만들 수 있는 직사각형을 계산합니다.
 */

// 가장 단순한 예시: [3, 2]
function example1() {
    console.log("=== 예시 1: [3, 2] ===");
    console.log("3이 먼저 나오고 2가 나옴");
    console.log("2를 만났을 때, 3으로 만들 수 있는 직사각형의 너비가 확정됨!");
    console.log("3의 직사각형: 너비 1, 넓이 3×1 = 3");
    console.log("2의 직사각형: 너비 2, 넓이 2×2 = 4 ← 최대!");
}

// 조금 복잡한 예시: [1, 3, 2]
function example2() {
    console.log("\n=== 예시 2: [1, 3, 2] ===");
    console.log("스택: [] → [0] → [0,1]");
    console.log("2를 만났을 때:");
    console.log("- 3(index 1)의 직사각형 계산: 너비 1, 넓이 3");
    console.log("- 2는 1보다 크므로 계속 진행");
    console.log("마지막에 남은 것들 처리:");
    console.log("- 2의 직사각형: 너비 1, 넓이 2");
    console.log("- 1의 직사각형: 너비 3, 넓이 3 ← 최대!");
}

// 너비 계산의 이해
function understandingWidth() {
    console.log("\n=== 너비 계산 이해하기 ===");
    console.log("heights = [2, 1, 5, 6, 2, 3]에서 5의 너비를 계산한다면:");
    console.log("1. 5는 index 2에 있음");
    console.log("2. index 4에서 2를 만나 계산 시작");
    console.log("3. 스택 상태: [1] (index 1만 남음)");
    console.log("4. 너비 = 4 - 1 - 1 = 2");
    console.log("   → index 2부터 3까지, 즉 2칸!");
}

// 실제 구현 (주석 포함)
export class Solution {
    largestRectangleArea(heights: number[]): number {
        const stack: number[] = []; // 인덱스 저장
        let maxArea = 0;
        
        // 트릭: 마지막에 0을 추가해서 모든 막대 처리
        heights.push(0);
        
        for (let i = 0; i < heights.length; i++) {
            // 현재 막대가 더 낮다면? 
            // → 이전의 높은 막대들로 만들 수 있는 직사각형 계산!
            while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
                const heightIndex = stack.pop()!;
                const h = heights[heightIndex];
                
                // 너비 계산이 핵심!
                // 스택이 비었다 = 왼쪽 끝까지 확장 가능
                // 스택이 있다 = 스택 top 다음부터 현재 전까지
                const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                
                maxArea = Math.max(maxArea, h * w);
            }
            
            stack.push(i);
        }
        
        heights.pop(); // 추가했던 0 제거
        return maxArea;
    }
}

// 흔한 오해들
function commonMisunderstandings() {
    console.log("\n=== 흔한 오해들 ===");
    console.log("1. '왜 높이가 아니라 인덱스를 저장하나요?'");
    console.log("   → 너비를 계산하려면 위치 정보가 필요합니다!");
    
    console.log("\n2. '왜 마지막에 0을 추가하나요?'");
    console.log("   → 스택에 남은 모든 막대를 강제로 처리하기 위해서입니다.");
    
    console.log("\n3. '너비 계산이 이해가 안 돼요'");
    console.log("   → 스택에는 '아직 오른쪽 경계가 확정되지 않은' 막대들이 있습니다.");
    console.log("   → 더 낮은 막대를 만나면 그때 오른쪽 경계가 확정됩니다!");
}

// 실행
example1();
example2();
understandingWidth();
commonMisunderstandings();