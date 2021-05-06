<template>
  <div class="vaccine">
    <div class="type-of-vaccine">
      <div class="pfizer" @click="selectVaccineInfo" :class="{ active: selectNum === 1 }">화이자</div>
      <div class="astra-zeneca" @click="selectVaccineInfo" :class="{ active: selectNum === 2 }">아스트라제네카</div>
      <div class="janssen" @click="selectVaccineInfo" :class="{ active: selectNum === 3 }">얀센</div>
      <div class="moderna" @click="selectVaccineInfo" :class="{ active: selectNum === 4 }">모더나</div>
    </div>
    <!-- 나중에 코드 수정 -->
    <div class="description">
      <template v-if="selectNum === 1">
        <div class="desc">
          <div>
            <div>개발국</div>
            <div>미국/독일</div>
          </div>
          <div>
            <div>수량</div>
            <div>2,000만회 분</div>
          </div>
          <div>
            <div>접종횟수</div>
            <div>2회</div>
          </div>
          <div>
            <div>접종간격</div>
            <div>21일</div>
          </div>
          <div>
            <div>보관</div>
            <div>
              -75℃±15℃ (6개월)
            </div>
          </div>
          <div>
            <div>유통</div>
            <div>
              2∼8℃ (5일)
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="selectNum === 2">
        <div class="desc">
          <div>
            <div>개발국</div>
            <div>
              영국
            </div>
          </div>
          <div>
            <div>수량</div>
            <div>2,000만회 분</div>
          </div>
          <div>
            <div>접종횟수</div>
            <div>2회</div>
          </div>
          <div>
            <div>접종간격</div>
            <div>
              8~12주
            </div>
          </div>
          <div>
            <div>보관</div>
            <div>
              2∼8℃ (6개월)
            </div>
          </div>
          <div>
            <div>유통</div>
            <div>
              2∼8℃ (6개월)
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="selectNum === 3">
        <div class="desc">
          <div>
            <div>개발국</div>
            <div>미국</div>
          </div>
          <div>
            <div>수량</div>
            <div>
              600만회 분
            </div>
          </div>
          <div>
            <div>접종횟수</div>
            <div>
              1회 * (임상결과에 따라 변경가능)
            </div>
          </div>
          <div>
            <div>접종간격</div>
            <div>
              -
            </div>
          </div>
          <div>
            <div>보관</div>
            <div>
              -20℃ (24개월)
            </div>
          </div>
          <div>
            <div>유통</div>
            <div>
              2∼8℃ (3개월)
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="selectNum === 4">
        <div class="desc">
          <div>
            <div>개발국</div>
            <div>미국</div>
          </div>
          <div>
            <div>수량</div>
            <div>4,000만회 분</div>
          </div>
          <div>
            <div>접종횟수</div>
            <div>2회</div>
          </div>
          <div>
            <div>접종간격</div>
            <div>21일</div>
          </div>
          <div>
            <div>보관</div>
            <div>
              -20℃ (6개월)
            </div>
          </div>
          <div>
            <div>유통</div>
            <div>
              2∼8℃(30일)
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectNum: 1,
    };
  },
  methods: {
    selectVaccineInfo(e) {
      if (e.target.className === 'pfizer') {
        this.selectNum = 1;
      } else if (e.target.className === 'astra-zeneca') {
        this.selectNum = 2;
      } else if (e.target.className === 'janssen') {
        this.selectNum = 3;
      } else if (e.target.className === 'moderna') {
        this.selectNum = 4;
      }
    },
  },
};
</script>

<style scoped>
.vaccine {
  width: 458px;
  border: 1px solid #474b55;
  padding: 25px;
  border-radius: 12px;
  background-color: #191f2c;
  margin-bottom: 20px;
}
.type-of-vaccine {
  height: 36px;
  display: flex;
  border-radius: 12px;
  background-color: #272b38;
  font-size: 12px;
}
.type-of-vaccine > div {
  width: 120px;
  padding: 0px 3px;
  text-align: center;
  line-height: 36px;
  font-weight: bold;
  cursor: pointer;
}
.desc > div {
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
}
.desc > div > div:nth-child(1) {
  width: 90px;
  margin-right: 10px;
  color: #949aa4;
}
.active {
  border: 1px solid #555862;
  border-radius: 12px;
  color: #cfcfcf;
  background-color: #2e323e;
}
/*
  light mode
*/
.vaccine {
  background-color: var(--div-color);
  border: 1px solid var(--border-color);
}
.vaccine > .type-of-vaccine {
  background-color: var(--select-color);
}
.vaccine > .type-of-vaccine > .active {
  background-color: var(--active-bg-color);
  border: 1px solid var(--active-border-color);
  color: var(--text-color);
}
.vaccine > div > div > div > div:nth-child(2) {
  color: var(--text-color);
}
/*
  반응형
*/
/* 모바일 */
@media screen and (max-width: 480px) {
  .vaccine {
    width: 75%;
    margin: 0 auto 20px;
    border: 1px solid var(--border-color);
  }
}
@media screen and (max-width: 375px) and (min-width: 321px) {
  .vaccine {
    width: 65%;
    margin: 0 auto 20px;
    border: 1px solid var(--border-color);
  }
}
@media screen and (max-width: 320px) {
  .vaccine {
    width: 55%;
    margin: 0 auto 20px;
    border: 1px solid var(--border-color);
  }
  .type-of-vaccine > div {
    width: max-content;
    padding: 0px 10px;
    margin: 0 auto;
  }
}
</style>
