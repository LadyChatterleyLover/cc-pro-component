<template>
  <div style="width: 500px">
    <cc-menu style="width: 350px" :data="data" defaultActive="2" name="a" index="b" icon="c" children="d"></cc-menu>
  </div>
</template>

<script lang="ts" setup>
const data = [
  {
    a: '导航1',
    b: '1',
    c: 'Document',
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document',
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'Document',
        d: [
          {
            a: '导航3-1-1',
            b: '3-1-1',
            c: 'Document',
            d: [
              {
                a: '导航3-1-1-1',
                b: '3-1-1-1',
                c: 'Document',
                d: [
                  {
                    a: '导航3-1-1-1-1',
                    b: '3-1-1-1-1',
                    c: 'Document',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]
</script>

<style lang="scss" scoped></style>
