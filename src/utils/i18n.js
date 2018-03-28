//转换 router.meta.title,用在面包屑 侧边栏 tagsview
export function generateTitle(title) {
    const hasKey = this.$te('route.' + title)
    const translatedTitle = this.$t('route.' + title)

    if (hasKey) {
        return translatedTitle
    }
    return title
}