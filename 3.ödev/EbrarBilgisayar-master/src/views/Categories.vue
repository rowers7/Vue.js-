<template>
  <div class="categories">
    <v-row>
      <v-col md="3">
        <v-card>
          <v-toolbar color="primary" dark flat>
            <v-icon>mdi-silverware</v-icon>
            <v-toolbar-title>Local hotspots</v-toolbar-title>
          </v-toolbar>

          <v-row>
            <v-col>
              <v-card-text>
                <v-treeview
                  v-model="tree"
                  :load-children="fetch"
                  :items="items"
                  selected-color="indigo"
                  open-on-click
                  selectable
                  return-object
                  expand-icon="mdi-chevron-down"
                  on-icon="mdi-bookmark"
                  off-icon="mdi-bookmark-outline"
                  indeterminate-icon="mdi-bookmark-minus"
                >
                </v-treeview>
              </v-card-text>
            </v-col>

            <v-divider vertical></v-divider>

            <v-col cols="12" md="6">
              <v-card-text>
                <div
                  v-if="tree.length === 0"
                  key="title"
                  class="title font-weight-light grey--text pa-4 text-center"
                >
                  Select your favorite breweries
                </div>

                <v-scroll-x-transition group hide-on-leave>
                  <v-chip
                    v-for="(selection, i) in tree"
                    :key="i"
                    color="grey"
                    dark
                    small
                    class="ma-1"
                  >
                    <v-icon left small>
                      mdi-beer
                    </v-icon>
                    {{ selection.name }}
                  </v-chip>
                </v-scroll-x-transition>
              </v-card-text>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn text @click="tree = []">
              Reset
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn class="white--text" color="green darken-1" depressed>
              Save
              <v-icon right>
                mdi-content-save
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import categories from "@/db/categories";
export default {
  data() {
    return {
      categories: categories,
      breweries: [],
      isLoading: false,
      tree: [],
      types: [],
    };
  },
};
</script>

<style lang="scss" scoped></style>
