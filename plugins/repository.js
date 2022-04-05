import Repository from '~/repository'

export default function (context, inject) {
  inject('repository', new Repository(context))
}
